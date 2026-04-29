---
slug: "polling-vs-sse-tradeoff"
title: "Polling vs SSE — quando a complexidade não se justifica"
title_en: "Polling vs SSE — when complexity isn't worth it"
date: "2026-04-29"
tags: ["Design de Sistema", "Boas Práticas", "Arquitetura"]
excerpt: "Duas abordagens para notificações em tempo real, uma variável que decide entre elas, e um princípio que fica depois de tudo isso."
excerpt_en: "Two approaches for real-time notifications, one variable that decides between them, and a principle that sticks after all of it."
---

<!-- NARRATIVA -->
Estava arquitetando as notificações de um sistema quando a pergunta surgiu: como o frontend fica sabendo, em tempo real, que um evento aconteceu no backend?

Duas abordagens entraram na mesa. A análise que fiz me lembrou um princípio que vale repetir.

---

## O problema

O sistema precisa avisar o usuário quando um determinado evento ocorre no backend. O usuário está com o frontend aberto. Como a informação chega sem ele recarregar a página?

Vale entender primeiro por que o backend não pode simplesmente "mandar uma requisição" para o frontend. HTTP é um protocolo onde sempre é o cliente que inicia a conexão — o browser não é um servidor, não tem porta aberta, não tem IP fixo. O backend não tem como "ligar" para o browser por conta própria. É por isso que as abordagens abaixo existem: todas contornam essa limitação fazendo o cliente iniciar e manter a conexão de alguma forma.

---

## Abordagem 1 — Polling

O frontend pergunta ao backend periodicamente se há algo novo.

```
Frontend → GET /notifications (a cada 30s)
Servidor → "nada novo"
Frontend → GET /notifications (a cada 30s)
Servidor → "nada novo"
Frontend → GET /notifications (a cada 30s)
Servidor → "aqui está sua notificação"
```

**Como funciona:** requisição HTTP normal, repetida em intervalo fixo. O servidor responde e fecha a conexão. Stateless por natureza.

**Prós:**
- Implementação trivial — é só uma requisição HTTP com `setInterval`
- Stateless — o servidor não mantém nada entre as chamadas
- Funciona com qualquer infraestrutura sem configuração adicional
- Fácil de debugar, monitorar e escalar horizontalmente

**Contras:**
- A maioria das requisições retorna vazio — desperdício proporcional ao intervalo
- Atraso na notificação igual ao intervalo escolhido
- Com muitos usuários simultâneos, o volume de requisições cresce linearmente

---

## Abordagem 2 — SSE (Server-Sent Events)

O frontend abre uma conexão HTTP e fica escutando. O servidor empurra dados quando tiver algo novo.

```
Frontend → GET /notifications/stream (conexão fica aberta)
Servidor → (silêncio)
Servidor → (evento ocorre) "data: {tipo, mensagem}" → frontend recebe na hora
Servidor → (silêncio)
```

**Como funciona:** conexão HTTP persistente e unidirecional — só o servidor fala. Nativo no browser via `EventSource`. Diferente do WebSocket, não requer handshake especial nem protocolo separado.

**Prós:**
- Notificação instantânea — zero atraso entre o evento e a entrega
- Sem requisições desnecessárias — o servidor só fala quando tem algo
- Eficiente com alto volume de notificações
- Mais simples que WebSocket para casos unidirecionais

**Contras:**
- Conexão HTTP permanente — o servidor mantém uma conexão aberta por usuário conectado
- Requer integração com pub/sub interno (Redis, etc.) para que o worker que detectou o evento avise o servidor de API que está com a conexão do usuário aberta
- Limites de conexões abertas precisam de atenção na infra
- Mais complexo de debugar e monitorar

---

## A variável que decide

Ambas as abordagens resolvem o problema. O que determina a escolha correta é uma única variável: **a frequência dos eventos**.

| Frequência de eventos | Polling | SSE |
|---|---|---|
| Alta (mensagens, atualizações ao vivo) | Ineficiente — maioria das requests vazia | Ideal |
| Média (notificações ocasionais) | Aceitável com intervalo curto | Razoável |
| Baixa (alertas raros, relatórios) | Ideal | Complexidade desnecessária |

Para sistemas com eventos frequentes — um chat, um dashboard de métricas ao vivo, uma colaboração em tempo real — SSE (ou WebSocket para bidirecional) é claramente o caminho. O volume de eventos justifica manter a conexão aberta.

Para sistemas onde os eventos são raros — alertas pontuais, notificações que chegam algumas vezes por dia — polling com intervalo curto resolve com atraso imperceptível e zero complexidade adicional.

---

## O que aprendi na prática

No projeto em desenvolvimento, os eventos são raros por design — alguns por dia, no máximo. SSE manteria uma conexão aberta por usuário para entregar algo que acontece poucas vezes no dia. O custo de complexidade — integração com pub/sub, gestão de conexões abertas, monitoramento adicional — não entregava nenhum benefício real ao usuário.

Polling a cada 1 minuto: atraso máximo de 60 segundos numa notificação esperada em horas. Imperceptível.

---

## O princípio

> Sofisticação técnica deve ser proporcional à complexidade do problema.

Escolher SSE num sistema de baixa frequência não é "pensar no futuro" — é adicionar complexidade sem contrapartida real hoje. Quando o volume crescer e o polling se tornar ineficiente, a migração para SSE é localizada e justificada.

A pergunta certa não é "qual abordagem é mais moderna?" mas "qual escala com o meu volume de eventos?"

<!-- NARRATIVA_EN -->
I was designing the notification layer of a system when the question came up: how does the frontend know, in real time, that something happened on the backend?

Two approaches were on the table. The analysis I did reminded me of a principle worth repeating.

---

## The problem

The system needs to notify the user when a specific event occurs on the backend. The user has the frontend open. How does the information arrive without them refreshing the page?

First, it's worth understanding why the backend can't simply "send a request" to the frontend. HTTP is a protocol where the client always initiates the connection — the browser is not a server, it has no open port, no fixed IP. The backend has no way to "call" the browser on its own. That's why the approaches below exist: they all work around this limitation by having the client initiate and maintain the connection somehow.

---

## Approach 1 — Polling

The frontend periodically asks the backend if there's anything new.

```
Frontend → GET /notifications (every 30s)
Server → "nothing new"
Frontend → GET /notifications (every 30s)
Server → "nothing new"
Frontend → GET /notifications (every 30s)
Server → "here's your notification"
```

**How it works:** a regular HTTP request, repeated at a fixed interval. The server responds and closes the connection. Stateless by nature.

**Pros:**
- Trivial to implement — just an HTTP request with `setInterval`
- Stateless — the server maintains nothing between calls
- Works with any infrastructure without extra setup
- Easy to debug, monitor, and scale horizontally

**Cons:**
- Most requests return empty — waste proportional to the interval
- Notification delay equals the chosen interval
- With many simultaneous users, request volume grows linearly

---

## Approach 2 — SSE (Server-Sent Events)

The frontend opens an HTTP connection and keeps listening. The server pushes data when there's something new.

```
Frontend → GET /notifications/stream (connection stays open)
Server → (silence)
Server → (event occurs) "data: {type, message}" → frontend receives immediately
Server → (silence)
```

**How it works:** persistent, unidirectional HTTP connection — only the server speaks. Native in the browser via `EventSource`. Unlike WebSocket, it requires no special handshake or separate protocol.

**Pros:**
- Instant notification — zero delay between event and delivery
- No unnecessary requests — the server only speaks when it has something
- Efficient with high notification volume
- Simpler than WebSocket for unidirectional cases

**Cons:**
- Permanent HTTP connection — the server keeps one connection open per connected user
- Requires internal pub/sub integration (Redis, etc.) so the worker that detected the event can notify the API server holding the user's connection
- Open connection limits need attention in infrastructure
- More complex to debug and monitor

---

## The deciding variable

Both approaches solve the problem. What determines the right choice is a single variable: **event frequency**.

| Event frequency | Polling | SSE |
|---|---|---|
| High (messages, live updates) | Inefficient — most requests empty | Ideal |
| Medium (occasional notifications) | Acceptable with short interval | Reasonable |
| Low (rare alerts, reports) | Ideal | Unnecessary complexity |

For systems with frequent events — a chat, a live metrics dashboard, real-time collaboration — SSE (or WebSocket for bidirectional) is clearly the way. The event volume justifies keeping the connection open.

For systems where events are rare — one-off alerts, notifications arriving a few times a day — polling with a short interval delivers with imperceptible delay and zero extra complexity.

---

## What I learned in practice

In the project I was working on, events are rare by design — a few per day at most. SSE would keep a connection open per user to deliver something that happens a handful of times a day. The complexity cost — pub/sub integration, open connection management, additional monitoring — delivered no real benefit to the user.

Polling every 1 minute: maximum delay of 60 seconds on a notification expected in hours. Imperceptible.

---

## The principle

> Technical sophistication should be proportional to the complexity of the problem.

Choosing SSE in a low-frequency system isn't "thinking ahead" — it's adding complexity with no real payoff today. When volume grows and polling becomes inefficient, migrating to SSE is a localized and justified change.

The right question isn't "which approach is more modern?" but "which one scales with my event volume?"
