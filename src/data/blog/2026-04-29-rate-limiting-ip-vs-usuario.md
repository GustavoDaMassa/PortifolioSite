---
slug: "rate-limiting-ip-vs-usuario"
title: "A porta que você deixou aberta"
title_en: "The door you left open"
date: "2026-04-29"
tags: ["Segurança", "Boas Práticas", "Design de Sistema"]
excerpt: "Configurar rate limiting nos endpoints autenticados e se sentir protegido é um erro clássico. Login e registro não têm JWT ainda — e são exatamente os mais vulneráveis."
excerpt_en: "Configuring rate limiting on authenticated endpoints and feeling protected is a classic mistake. Login and register don't have a JWT yet — and they're exactly the most vulnerable."
---

<!-- NARRATIVA -->
Que desenvolvedor nunca configurou rate limiting, viu os endpoints respondendo 429 como esperado — e se sentiu protegido?

O problema é que a sensação de proteção e a proteção real não são a mesma coisa. E a diferença costuma estar exatamente no endpoint que parece simples demais para se preocupar.

---

## A falsa sensação de segurança

A lógica parece sólida: rate limiting nos endpoints autenticados, nos que manipulam dados, nos que têm lógica de negócio. JWT validado, usuário identificado, cota controlada.

Só que essa lógica tem uma lacuna fundamental. Rate limiting por usuário pressupõe que o usuário já existe e já está autenticado. Antes disso — no login, no registro, na recuperação de senha — não há JWT. Não há usuário. Não há cota.

Esses endpoints ficam sem proteção porque "são simples". São apenas uma entrada no sistema.

São exatamente os mais vulneráveis.

---

## O que acontece sem proteção

Sem limite no login, um atacante pode testar combinações de senha sem nenhum obstáculo. Não há custo, não há espera, não há bloqueio. Requisição após requisição, automatizada, até acertar. É um ataque de força bruta — simples, antigo, e ainda funciona quando não há nada impedindo.

No registro sem proteção, é possível criar contas em massa — para spam, para fraude, para abuso de qualquer recurso que dependa de uma conta válida.

A ironia é que quem sofre o ataque geralmente tem rate limiting implementado. Só que no lugar errado.

---

## Por que o JWT não resolve isso

Rate limiting por usuário usa o ID extraído do JWT para identificar quem está fazendo a requisição e aplicar a cota. É um mecanismo eficaz — e invisível para o atacante, que não pode simplesmente trocar de identidade.

Mas esse mecanismo não existe antes da autenticação. No login, o atacante ainda não tem token. No registro, ele nunca teve. O sistema não sabe quem está batendo na porta — só sabe de onde.

Antes da autenticação, o único identificador disponível é o IP.

---

## A estratégia correta

Não é escolher entre IP ou usuário — é aplicar cada um onde faz sentido.

**Endpoints públicos → rate limiting por IP**
```
POST /auth/login        → máx. 10 tentativas por IP a cada 15 minutos
POST /auth/register     → máx. 5 registros por IP por hora
POST /auth/resend-email → máx. 3 reenvios por IP por hora
```

**Endpoints autenticados → rate limiting por usuário**
```
GET  /products   → máx. 60 requisições por usuário por minuto
POST /products   → máx. 20 criações por usuário por hora
```

Há um detalhe que invalida o rate limiting por IP em silêncio: quando a API está atrás de nginx, proxy ou load balancer, o IP que chega ao servidor é o do proxy — não o do cliente. O IP real vem no header `X-Forwarded-For`. Usar o IP errado significa que todos os usuários compartilham a mesma cota. A proteção existe no código, mas não funciona.

---

## Fixed window vs Sliding window

Escolhida a estratégia, ainda há uma variável que determina se um atacante consegue burlar o limite no exato momento em que a janela vira.

**Fixed window** define períodos fixos — minuto 00, minuto 01. Um atacante pode fazer 10 requisições nos últimos 5 segundos de um período e mais 10 nos primeiros 5 do próximo: 20 requisições em 10 segundos, sem violar o limite.

```
|--- minuto 1 ---|--- minuto 2 ---|
          [10 req][10 req]
                  ^ 20 requisições em 10s passam sem bloqueio
```

**Sliding window** sempre olha os últimos X segundos a partir do momento atual. Não importa onde está a fronteira do minuto — o limite é verificado em relação ao passado recente. Sem brecha no boundary.

Para login e endpoints críticos, sliding window é a escolha certa. Para endpoints de uso geral com limites generosos, fixed window é suficiente e mais simples.

---

## O princípio

Proteja o acesso antes de proteger o recurso.

Rate limiting é uma ferramenta de contexto: protege com base no que você sabe sobre quem está fazendo a requisição. Antes da autenticação, você sabe o IP. Depois, você sabe o usuário. Aplicar a ferramenta errada no contexto errado não é proteção — é a ilusão dela.

A porta da sala pode estar trancada. Se a porta da frente ficou aberta, tanto faz.

<!-- NARRATIVA_EN -->
What developer hasn't configured rate limiting, seen endpoints responding with 429 as expected — and felt protected?

The problem is that the feeling of protection and actual protection are not the same thing. And the difference usually lies exactly in the endpoint that seems too simple to worry about.

---

## The false sense of security

The logic seems solid: rate limiting on authenticated endpoints, on the ones that manipulate data, on the ones with business logic. JWT validated, user identified, quota controlled.

But this logic has a fundamental gap. Rate limiting by user presupposes that the user already exists and is already authenticated. Before that — on login, registration, password recovery — there is no JWT. No user. No quota.

These endpoints go unprotected because they're "simple." They're just an entry point into the system.

They're exactly the most vulnerable.

---

## What happens without protection

Without a limit on login, an attacker can test password combinations with no obstacle. No cost, no waiting, no blocking. Request after request, automated, until it hits. It's a brute force attack — simple, old, and it still works when nothing is stopping it.

On an unprotected registration endpoint, accounts can be created in bulk — for spam, for fraud, for abusing any resource that depends on a valid account.

The irony is that whoever suffers the attack usually has rate limiting implemented. Just in the wrong place.

---

## Why JWT doesn't solve this

Rate limiting by user uses the ID extracted from the JWT to identify who is making the request and apply the quota. It's an effective mechanism — and invisible to the attacker, who can't simply switch identities.

But this mechanism doesn't exist before authentication. On login, the attacker doesn't have a token yet. On registration, they never did. The system doesn't know who's knocking on the door — it only knows from where.

Before authentication, the only available identifier is the IP.

---

## The right strategy

It's not about choosing between IP or user — it's about applying each one where it makes sense.

**Public endpoints → rate limiting by IP**
```
POST /auth/login        → max 10 attempts per IP every 15 minutes
POST /auth/register     → max 5 registrations per IP per hour
POST /auth/resend-email → max 3 resends per IP per hour
```

**Authenticated endpoints → rate limiting by user**
```
GET  /products   → max 60 requests per user per minute
POST /products   → max 20 creations per user per hour
```

There's a detail that silently breaks IP-based rate limiting: when the API sits behind nginx, a proxy, or a load balancer, the IP that reaches the server is the proxy's — not the client's. The real IP comes in the `X-Forwarded-For` header. Using the wrong IP means all users share the same quota. The protection exists in the code, but it doesn't work.

---

## Fixed window vs Sliding window

Once the strategy is chosen, there's still a variable that determines whether an attacker can bypass the limit at the exact moment the window resets.

**Fixed window** defines fixed periods — minute 00, minute 01. An attacker can make 10 requests in the last 5 seconds of one period and 10 more in the first 5 of the next: 20 requests in 10 seconds, without violating the limit.

```
|--- minute 1 ---|--- minute 2 ---|
          [10 req][10 req]
                  ^ 20 requests in 10s pass without blocking
```

**Sliding window** always looks at the last X seconds from the current moment. It doesn't matter where the minute boundary is — the limit is always verified against the recent past. No boundary gap.

For login and critical endpoints, sliding window is the right choice. For general-use endpoints with generous limits, fixed window is sufficient and simpler to implement.

---

## The principle

Protect access before protecting the resource.

Rate limiting is a context tool: it protects based on what you know about who is making the request. Before authentication, you know the IP. After, you know the user. Applying the wrong tool in the wrong context isn't protection — it's the illusion of it.

The room door might be locked. If the front door was left open, it doesn't matter.