---
slug: "rate-limiting-ip-vs-usuario"
title: "Rate limiting — por IP, por usuário, ou os dois?"
title_en: "Rate limiting — by IP, by user, or both?"
date: "2026-04-29"
tags: ["Segurança", "Boas Práticas", "Design de Sistema"]
excerpt: "A maioria das APIs protege os endpoints autenticados e esquece que login e registro são os mais vulneráveis — e não têm JWT ainda."
excerpt_en: "Most APIs protect authenticated endpoints and forget that login and register are the most vulnerable — and they don't have a JWT yet."
---

<!-- NARRATIVA -->
Estava definindo a estratégia de rate limiting de uma API quando percebi um erro clássico que muitos cometem.

A maioria protege os endpoints autenticados — os que têm JWT — e esquece os públicos.

O problema: login e registro não têm JWT ainda. E são exatamente os mais vulneráveis.

---

## Por que rate limiting existe

Sem limite de requisições, qualquer endpoint fica exposto a:

- **Força bruta** — testar milhares de combinações de senha no login
- **Abuso de recursos** — criar contas em massa, spam de requisições
- **DDoS simples** — sobrecarregar o servidor com volume

Rate limiting define um teto: X requisições por janela de tempo. Acima disso, a API responde 429 Too Many Requests.

---

## Opção 1 — Limitar por IP

Conta requisições pelo endereço IP de origem, independente de autenticação.

**Quando protege bem:**
- Endpoints públicos — login, registro, recuperação de senha
- Ataques de força bruta antes da autenticação

**Onde falha:**
- IPs são compartilhados — um escritório inteiro sai pelo mesmo IP. Um usuário legítimo pode ser bloqueado por culpa de outro
- Fácil de contornar com VPN ou proxy — trocar de IP resolve o bloqueio

**Detalhe importante:** quando a API está atrás de um proxy, nginx ou load balancer, o IP que chega ao servidor é o do proxy — não o do cliente real. O IP real vem no header `X-Forwarded-For`. Usar o IP errado significa que todos os usuários compartilham a mesma cota, inutilizando a proteção.

---

## Opção 2 — Limitar por usuário autenticado

Conta requisições pelo ID do usuário extraído do JWT.

**Quando protege bem:**
- Endpoints autenticados — evita abuso de API por usuários individuais
- Não é contornável com troca de IP — o identificador é o usuário, não o endereço

**Onde falha:**
- Não existe JWT antes da autenticação — login e registro ficam desprotegidos
- O atacante que ainda não tem conta não é "usuário" para o sistema

---

## A decisão certa: os dois, em lugares diferentes

Não é escolher um ou outro — é aplicar cada um onde faz sentido.

**Endpoints públicos → rate limiting por IP**
```
POST /auth/login        → máx. 10 tentativas por IP a cada 15 minutos
POST /auth/register     → máx. 5 registros por IP por hora
POST /auth/resend-email → máx. 3 reenvios por IP por hora
```

**Endpoints autenticados → rate limiting por usuário**
```
GET  /products          → máx. 60 requisições por usuário por minuto
POST /products          → máx. 20 criações por usuário por hora
```

---

## Fixed window vs Sliding window

São duas formas de contar a janela de tempo — e a diferença afeta diretamente a efetividade da proteção.

**Fixed window (janela fixa)**
A janela começa no início de cada período fixo — minuto 00, minuto 01, etc. Um usuário pode fazer 10 requisições nos últimos 5 segundos do minuto e mais 10 nos primeiros 5 segundos do próximo, totalizando 20 em 10 segundos sem violar o limite.

```
|--- minuto 1 ---|--- minuto 2 ---|
          [10 req][10 req]
                   ^ 20 requisições em 10s passam pelo limite
```

**Sliding window (janela deslizante)**
A janela sempre olha para os últimos X segundos a partir do momento atual. Não importa a fronteira do minuto — o limite é sempre verificado em relação ao passado recente.

```
momento atual → olha os últimos 60s → conta as requisições nesse período
```

Mais precisa, mais justa, e sem a brecha do boundary. O custo é levemente maior em termos de armazenamento — precisa guardar o timestamp de cada requisição em vez de apenas um contador.

Para proteção de login e endpoints críticos, sliding window é a escolha certa. Para endpoints de uso geral com limites generosos, fixed window é suficiente e mais simples.

---

## O erro que acontece na prática

A proteção por JWT parece completa. O desenvolvedor configura rate limiting nos endpoints que "importam" — os que manipulam dados, os que têm lógica de negócio.

Login fica sem proteção porque "é só um endpoint simples".

É exatamente aí que o atacante entra: testando combinações de senha sem nenhum obstáculo, requisição após requisição, até acertar.

---

## O princípio

> Proteja o acesso antes de proteger o recurso.

Rate limiting por usuário pressupõe que o usuário já existe e já está autenticado. Para tudo que acontece antes disso, só o IP está disponível — e precisa ser usado.

A camada de proteção correta depende do que você sabe sobre quem está fazendo a requisição naquele momento.

<!-- NARRATIVA_EN -->
I was defining the rate limiting strategy for an API when I noticed a classic mistake that many developers make.

Most APIs protect authenticated endpoints — the ones that require a JWT — and forget about public ones.

The problem: login and register don't have a JWT yet. And they're exactly the most vulnerable.

---

## Why rate limiting exists

Without request limits, any endpoint is exposed to:

- **Brute force** — testing thousands of password combinations on the login endpoint
- **Resource abuse** — mass account creation, request spamming
- **Simple DDoS** — overwhelming the server with volume

Rate limiting sets a ceiling: X requests per time window. Above that, the API responds with 429 Too Many Requests.

---

## Option 1 — Limit by IP

Counts requests by the origin IP address, regardless of authentication.

**When it protects well:**
- Public endpoints — login, register, password recovery
- Brute force attacks before authentication

**Where it fails:**
- IPs are shared — an entire office exits through the same IP. A legitimate user can be blocked because of someone else
- Easy to bypass with a VPN or proxy — changing IP resolves the block

**Important detail:** when the API sits behind a proxy, nginx, or load balancer, the IP that reaches the server is the proxy's — not the real client's. The real IP comes in the `X-Forwarded-For` header. Using the wrong IP means all users share the same quota, making the protection useless.

---

## Option 2 — Limit by authenticated user

Counts requests by the user ID extracted from the JWT.

**When it protects well:**
- Authenticated endpoints — prevents API abuse by individual users
- Not bypassable with IP changes — the identifier is the user, not the address

**Where it fails:**
- There's no JWT before authentication — login and register remain unprotected
- The attacker who doesn't have an account yet isn't a "user" to the system

---

## The right decision: both, in different places

It's not about choosing one or the other — it's about applying each where it makes sense.

**Public endpoints → rate limiting by IP**
```
POST /auth/login        → max 10 attempts per IP every 15 minutes
POST /auth/register     → max 5 registrations per IP per hour
POST /auth/resend-email → max 3 resends per IP per hour
```

**Authenticated endpoints → rate limiting by user**
```
GET  /products          → max 60 requests per user per minute
POST /products          → max 20 creations per user per hour
```

---

## Fixed window vs Sliding window

Two ways of counting the time window — and the difference directly affects the protection's effectiveness.

**Fixed window**
The window starts at the beginning of each fixed period — minute 00, minute 01, etc. A user can make 10 requests in the last 5 seconds of a minute and 10 more in the first 5 seconds of the next, totaling 20 in 10 seconds without violating the limit.

```
|--- minute 1 ---|--- minute 2 ---|
          [10 req][10 req]
                   ^ 20 requests in 10s pass the limit
```

**Sliding window**
The window always looks at the last X seconds from the current moment. The minute boundary doesn't matter — the limit is always checked against the recent past.

```
current moment → looks at the last 60s → counts requests in that period
```

More precise, fairer, and without the boundary gap. The cost is slightly higher in terms of storage — it needs to store the timestamp of each request instead of just a counter.

For protecting login and critical endpoints, sliding window is the right choice. For general-use endpoints with generous limits, fixed window is sufficient and simpler.

---

## The mistake that happens in practice

JWT-based protection seems complete. The developer configures rate limiting on the endpoints that "matter" — the ones that manipulate data, the ones with business logic.

Login goes unprotected because "it's just a simple endpoint."

That's exactly where the attacker gets in: testing password combinations with no obstacle, request after request, until they get it right.

---

## The principle

> Protect access before protecting the resource.

Rate limiting by user presupposes the user already exists and is already authenticated. For everything that happens before that, only the IP is available — and it needs to be used.

The right protection layer depends on what you know about who's making the request at that moment.
