---
slug: "validar-email-nao-e-verificar-email"
title: "Validar email não é verificar email"
title_en: "Validating email is not verifying email"
date: "2026-04-29"
tags: ["Auth", "Design de Sistema", "Requisitos", "Boas Práticas"]
excerpt: "Durante o refinamento de requisitos de um projeto, a pergunta 'como garantimos que o email existe?' revelou que validação e verificação são problemas diferentes — com abordagens e impactos distintos no design do sistema."
excerpt_en: "During requirements refinement, the question 'how do we ensure the email exists?' revealed that validation and verification are different problems — with distinct approaches and impacts on system design."
---

<!-- NARRATIVA -->
Durante o refinamento de requisitos de um projeto que estou desenvolvendo, surgiu uma pergunta aparentemente simples:

> "Como garantimos que o email do usuário existe?"

A resposta instintiva é: "validando o formato". Mas formato e existência são dois problemas completamente diferentes. Confundir os dois é uma das formas mais silenciosas de quebrar uma feature em produção.

---

## Validação vs verificação

**Validação** responde: o email está no formato correto?

Isso é resolvido com uma regex ou anotação do framework (`@Email` no Bean Validation, `[EmailAddress]` no .NET, etc.). Custo zero. Mas não diz nada sobre se o endereço existe ou pertence a alguém.

**Verificação** responde: esse email pertence a alguém que tem acesso a ele?

Essa é a pergunta que realmente importa quando o email é o canal principal de comunicação do sistema.

---

## As abordagens

### 1. Validação sintática

Verifica apenas o formato via regex ou biblioteca. É o mínimo que qualquer sistema deveria fazer.

```
usuario@dominio.com   → válido
usuario@              → inválido
@dominio.com          → inválido
usuario@dominio       → depende da regex — RFC 5321 tecnicamente permite
```

A RFC 5321 define o formato completo de um endereço de email. A maioria das implementações usa um subconjunto — endereços tecnicamente válidos pela RFC como `"usuario com espaço"@dominio.com` raramente são aceitos na prática.

**Quando usar:** email é dado secundário — um campo de contato opcional, por exemplo.

**Por que não fecha o problema:** `qualquercoisa@inventado.xyz` passa na validação. O usuário cadastra, nunca recebe nada, e o sistema parece funcionar — mas não funciona.

---

### 2. Verificação de MX record

Consulta o DNS do domínio e verifica se existe um registro MX (Mail Exchanger) — ou seja, se há um servidor configurado para receber emails naquele domínio.

```
gmail.com        → MX: smtp.google.com → aceita
dominiofalso.xyz → sem MX             → rejeita
```

**Prós:** elimina domínios claramente inválidos sem enviar nenhum email; latência baixa (dezenas de ms), pode ser feito de forma síncrona antes de persistir o cadastro.

**Contras:** não verifica a caixa postal. `fantasma99999@gmail.com` passa — `gmail.com` tem MX válido, mas a caixa específica pode não existir. Domínios corporativos também podem bloquear ou responder de forma inconsistente a consultas externas.

---

### 3. Verificação SMTP (RCPT TO)

Abre uma conexão SMTP com o servidor de destino e executa o comando `RCPT TO` sem de fato enviar nenhum email — só para verificar se o servidor aceita entregas para aquele endereço.

```
EHLO verificador.com
MAIL FROM: <verify@verificador.com>
RCPT TO: <usuario@dominio.com>   ← 250 OK = caixa existe (em teoria)
QUIT
```

**Prós:** teoricamente verifica a caixa postal, não apenas o domínio.

**Contras sérios:**
- A maioria dos grandes provedores (Gmail, Outlook, Yahoo) retorna `250 OK` para qualquer endereço — independente de a caixa existir. Fazem isso para evitar enumeração de endereços.
- Servidores corporativos costumam bloquear a conexão ou retornar erros genéricos.
- Sua aplicação pode ser sinalizada como spam por tentar conexões SMTP em volume.

Na prática, não é confiável o suficiente para uso em produção.

---

### 4. Confirmação por email

Ao registrar, o sistema gera um token único com prazo de expiração, envia um email com o link de confirmação e aguarda o clique para confirmar.

```
Cadastro
  → gera UUID token + define expiração (ex: 24h)
  → persiste: isEmailVerified=false, token, expiresAt
  → envia email com link contendo o token
  → usuário clica
      → backend valida token + expiração
      → marca email como verificado
      → limpa token e expiresAt
```

**Prós:** única abordagem que garante que o email existe *e* que o usuário tem acesso a ele. Fecha o loop completamente.

**Contras:** adiciona uma etapa ao onboarding; requer lógica de expiração, reenvio e tratamento de tokens inválidos.

O caso de reenvio é frequentemente esquecido no design inicial — mas é essencial: emails caem em spam, tokens expiram, usuários erram o endereço no cadastro e precisam corrigir.

---

## Como a decisão afeta o design

Quando o email é canal crítico e a escolha é pela confirmação, o impacto vai além de um campo a mais no banco:

**Modelo de dados** — o `User` ganha campos para controlar o estado da verificação: a flag booleana, o token temporário e sua expiração. Após a confirmação, token e expiração são limpos.

**Use cases** — surgem pelo menos três novos fluxos: registro (gera e envia o token), verificação (valida e ativa), reenvio (invalida o anterior e gera um novo).

**Regras de negócio** — é preciso decidir o que um usuário não verificado pode ou não fazer. Uma abordagem comum é permitir o login mas restringir as features que dependem do email até a verificação ser concluída.

---

## O ponto central

A pergunta "como validamos o email?" parece técnica. Na verdade é uma pergunta de produto: *qual é o papel do email nessa aplicação?*

Se é dado secundário, validação sintática resolve. Se é canal crítico, confirmação por email é o único caminho que fecha o loop com garantia real — e a decisão muda o modelo de dados, os use cases e as regras de negócio antes de você escrever uma linha de código de feature.

<!-- NARRATIVA_EN -->
During requirements refinement for a project I am developing, a seemingly simple question came up:

> "How do we guarantee the user's email exists?"

The instinctive answer is: "by validating the format." But format and existence are two completely different problems. Confusing them is one of the most silent ways to break a production feature.

---

## Validation vs verification

**Validation** answers: is the email in the correct format?

This is solved with a regex or framework annotation (`@Email` in Bean Validation, `[EmailAddress]` in .NET, etc.). Zero cost. But it says nothing about whether the address exists or belongs to anyone.

**Verification** answers: does this email belong to someone who has access to it?

That is the question that really matters when email is the system's primary communication channel.

---

## The approaches

### 1. Syntactic validation

Verifies only the format via regex or library. It is the minimum any system should do.

The RFC 5321 defines the complete format of an email address. Most implementations use a subset — technically valid RFC addresses like `"user with spaces"@domain.com` are rarely accepted in practice.

**When to use:** email is secondary data — an optional contact field, for example.

**Why it does not close the problem:** `anything@invented.xyz` passes validation. The user registers, never receives anything, and the system appears to work — but it does not.

---

### 2. MX record verification

Queries the domain's DNS and checks whether an MX (Mail Exchanger) record exists — meaning a server configured to receive emails for that domain.

**Pros:** eliminates clearly invalid domains without sending any email; low latency (tens of ms), can be done synchronously before persisting the registration.

**Cons:** does not verify the mailbox. `ghost99999@gmail.com` passes — `gmail.com` has a valid MX, but that specific mailbox may not exist. Corporate domains may also block or respond inconsistently to external queries.

---

### 3. SMTP verification (RCPT TO)

Opens an SMTP connection to the destination server and executes the `RCPT TO` command without actually sending an email — just to check whether the server accepts deliveries for that address.

**Pros:** theoretically verifies the mailbox, not just the domain.

**Serious cons:**
- Most large providers (Gmail, Outlook, Yahoo) return `250 OK` for any address — regardless of whether the mailbox exists. They do this to prevent address enumeration.
- Corporate servers tend to block the connection or return generic errors.
- Your application may be flagged as spam for attempting SMTP connections in volume.

In practice, not reliable enough for production use.

---

### 4. Email confirmation

Upon registration, the system generates a unique token with an expiration time, sends a confirmation email with the link, and waits for the click to confirm.

**Pros:** the only approach that guarantees the email exists *and* that the user has access to it. Closes the loop completely.

**Cons:** adds a step to onboarding; requires expiration logic, resend handling, and treatment of invalid or expired tokens.

The resend case is frequently overlooked in initial design — but it is essential in practice: emails land in spam, tokens expire, users mistype their address and need to correct it.

---

## How the decision affects design

When email is a critical channel and confirmation is the choice, the impact goes beyond one extra field in the database:

**Data model** — `User` gains fields to control verification state: the boolean flag, the temporary token, and its expiration. After confirmation, token and expiration are cleared.

**Use cases** — at least three new flows emerge: registration (generates and sends the token), verification (validates and activates), resend (invalidates the previous token and generates a new one).

**Business rules** — you need to decide what an unverified user can or cannot do. A common approach is to allow login but restrict features that depend on email until verification is complete.

---

## The core point

The question "how do we validate the email?" seems technical. It is actually a product question: *what role does email play in this application?*

If it is secondary data, syntactic validation resolves it. If it is a critical channel, email confirmation is the only path that closes the loop with real guarantees — and the decision changes the data model, the use cases, and the business rules before you write a single line of feature code.
