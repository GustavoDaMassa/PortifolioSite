---
slug: "pricewatch-completo"
title: "PriceWatch — do backend ao Chrome: como construí um monitor de preços completo"
title_en: "PriceWatch — from backend to Chrome: how I built a complete price monitor"
date: "2026-05-16"
tags: ["Clean Architecture", "Arquitetura", "Frontend", "Infraestrutura", "Home Server"]
excerpt: "Um projeto pessoal do zero ao deploy: API .NET 8 com Clean Architecture, SPA Angular 20 e extensão Chrome integrados num monitor de preços do Mercado Livre."
excerpt_en: "A personal project from scratch to production: .NET 8 API with Clean Architecture, Angular 20 SPA and Chrome extension integrated in a Mercado Livre price monitor."
---

<!-- NARRATIVA -->

![PriceWatch](https://raw.githubusercontent.com/GustavoDaMassa/PriceWatchExtension/main/promo-440x280.png)

O PriceWatch resolve um problema simples: você quer comprar um produto no Mercado Livre, mas o preço ainda não está onde você quer. Hoje você precisa entrar no site periodicamente para checar. O PriceWatch faz isso por você — monitora, registra o histórico e te avisa quando o preço atingir sua meta.

O projeto foi construído em três camadas: uma API .NET, um SPA Angular e uma extensão Chrome. Cada uma com decisões de arquitetura próprias.

---

## O backend — .NET 8 com Clean Architecture

A escolha de .NET foi intencional: eu já trabalhava com Java/Spring Boot e queria expandir para o ecossistema Microsoft com um projeto real.

A arquitetura segue Clean Architecture estrita: quatro camadas com dependências apontando sempre para dentro.

```
Domain        → sem dependências externas (entidades, interfaces, exceções)
Application   → casos de uso, DTOs, orquestração
Infrastructure → MongoDB, Redis, SMTP, ML API
API           → controllers, DI, middleware
```

O `Domain` não conhece MongoDB, Redis nem nada do mundo externo. Tudo que a camada de Application precisa está declarado como interface no próprio Domain — `IUserRepository`, `IPriceFetcher`, `IAlertPublisher`. A Infrastructure implementa.

### MongoDB como banco principal

A escolha de MongoDB (em vez de PostgreSQL) foi proposital para aprender document databases num contexto real. Cada agregado tem seu próprio documento: `User`, `TrackedProduct`, `PriceSnapshot`, `ProductList`, `Notification`. O mapeamento entre entidades de domínio e documentos é explícito — sem ORM gerenciando isso automaticamente.

### Redis Streams como mensageria leve

Quando o preço de um produto atinge o alvo, o sistema precisa enviar um e-mail e criar uma notificação in-app de forma assíncrona. A escolha foi Redis Streams em vez de Kafka.

Para um projeto pessoal, Kafka seria over-engineering: requer Zookeeper, tem overhead operacional considerável e é projetado para volumes que o PriceWatch jamais vai atingir. Redis já estava na stack para rate limiting — aproveitar Streams como mensageria foi zero custo adicional de infra.

O fluxo:
```
PriceCheckWorker detecta preço-alvo
  → RedisStreamPublisher publica no stream "price-alerts"
    → AlertDispatchWorker consome
      → envia e-mail + cria notificação no MongoDB
```

### Background Workers

Dois workers rodam como `BackgroundService`:

**PriceCheckWorker** — acorda a cada 1 minuto, busca todos os produtos com `nextCheckAt <= agora`, chama a API do Mercado Livre para cada um, salva o snapshot e avalia se o preço-alvo foi atingido.

**AlertDispatchWorker** — consome o Redis Stream "price-alerts" e processa cada evento.

### Integração com o Mercado Livre

O endpoint `/items/{id}` retorna 403 sem a permissão `items:read` — indisponível para apps novos. A solução foi usar os endpoints de catálogo:

```
GET /products/{catalogId}        → nome e dados do produto
GET /products/{catalogId}/items  → lista de vendedores com preços
```

O preço monitorado é o menor preço ativo entre todos os vendedores. Só URLs de catálogo são suportadas (`/p/MLB...`).

---

## O frontend — Angular 20 SPA

O SPA foi construído com Angular 20: standalone components, `inject()`, Angular Signals, control flow (`@if`, `@for`), lazy loading com `loadComponent()`.

O design é inspirado no Mercado Livre — fundo amarelo, navbar duas linhas, cards brancos. A decisão foi intencional: o PriceWatch se integra ao ML, então fazer o SPA parecer parte do mesmo ecossistema visual cria coerência para o usuário.

### Funcionalidades principais

- Dashboard com resumo de listas e produtos
- `/items` — todos os produtos com busca client-side via query param
- Listas com análise (menor preço, maior preço, média)
- Histórico de preços com gráfico (Chart.js 4)
- Notificações in-app via polling a cada 30 segundos
- Seleção em massa com ações em batch (ativar, pausar, atribuir lista, excluir)
- Auth completa: JWT em localStorage, interceptor, guards funcionais

### Por que polling e não SSE para notificações

Notificações de alerta de preço acontecem algumas vezes por dia, no máximo. Manter uma conexão SSE aberta permanentemente para entregar algo que ocorre raramente não entrega valor proporcional à complexidade. Polling a cada 30s tem atraso máximo de meio minuto numa notificação esperada em horas — imperceptível.

---

## A extensão Chrome — Manifest V3

A extensão resolve o problema de onboarding: sem ela, o usuário precisaria abrir o SPA, copiar a URL do produto e colar no campo de cadastro. Com ela, basta clicar em "Acompanhar com PriceWatch" diretamente na página do ML.

### Como funciona

Um content script é injetado em todas as páginas do `mercadolivre.com.br`. Ele detecta o buy box e injeta o botão "Acompanhar com PriceWatch" abaixo do "Comprar agora".

Como o ML é uma SPA, navegar entre produtos não recarrega a página. O content script usa `MutationObserver` sobre o `document.body` para detectar navegações internas e reinjetar o botão após cada mudança de produto.

A URL do produto é extraída do `<link rel="canonical">` — isso remove parâmetros de tracking e garante uma URL limpa.

### Autenticação

A extensão tem seu próprio popup de login. O usuário autentica diretamente pelo ícone na barra do Chrome. O token JWT é salvo em `chrome.storage.local` e lido pelo service worker a cada chamada à API. Não depende do SPA aberto em outra aba.

### Idempotência no cadastro

Ao clicar no botão, o backend verifica se o produto já existe para aquele usuário antes de criar:
- Ativo → retorna como está, sem erro
- Inativo → reativa e retorna
- Não existe → cria

Zero erro 409 para o usuário, zero duplicata no banco.

---

## Deploy — home server com Cloudflare Tunnel

O PriceWatch roda no meu servidor doméstico (Intel i5, 8GB RAM) via Docker Compose. Cinco containers: API .NET, MongoDB, Redis, Nginx e Watchtower.

O Nginx faz proxy reverso na porta 8083. O Cloudflare Tunnel expõe o serviço para a internet sem abrir portas no roteador — o servidor está atrás de CGNAT. O SPA fica no Vercel.

O deploy é automático: `git push → GitHub Actions → Docker Hub → Watchtower detecta a nova imagem → reinicia o container`. Zero intervenção manual.

---

## Demo

[![Assistir demo](https://raw.githubusercontent.com/GustavoDaMassa/PriceWatchExtension/main/icons/128.png)](https://www.youtube.com/watch?v=y6aXDqaX6HM)

[Assistir demo no YouTube →](https://www.youtube.com/watch?v=y6aXDqaX6HM)

<!-- NARRATIVA_EN -->

![PriceWatch](https://raw.githubusercontent.com/GustavoDaMassa/PriceWatchExtension/main/promo-440x280.png)

PriceWatch solves a simple problem: you want to buy a product on Mercado Livre, but the price isn't where you want it yet. Today you have to check the site manually and periodically. PriceWatch does it for you — it monitors, records the price history, and notifies you when the price hits your target.

The project was built in three layers: a .NET API, an Angular SPA, and a Chrome extension. Each with its own architectural decisions.

---

## The backend — .NET 8 with Clean Architecture

The choice of .NET was intentional: I was already working with Java/Spring Boot and wanted to expand into the Microsoft ecosystem with a real project.

The architecture follows strict Clean Architecture: four layers with dependencies always pointing inward.

```
Domain        → no external dependencies (entities, interfaces, exceptions)
Application   → use cases, DTOs, orchestration
Infrastructure → MongoDB, Redis, SMTP, ML API
API           → controllers, DI, middleware
```

The `Domain` knows nothing about MongoDB, Redis, or anything external. Everything the Application layer needs is declared as an interface in the Domain itself — `IUserRepository`, `IPriceFetcher`, `IAlertPublisher`. Infrastructure implements them.

### MongoDB as the main database

Choosing MongoDB (instead of PostgreSQL) was intentional to learn document databases in a real context. Each aggregate has its own document: `User`, `TrackedProduct`, `PriceSnapshot`, `ProductList`, `Notification`. The mapping between domain entities and documents is explicit — no ORM managing it automatically.

### Redis Streams as lightweight messaging

When a product's price hits the target, the system needs to send an email and create an in-app notification asynchronously. The choice was Redis Streams over Kafka.

For a personal project, Kafka would be over-engineering: it requires Zookeeper, has considerable operational overhead, and is designed for volumes PriceWatch will never reach. Redis was already in the stack for rate limiting — using Streams as messaging was zero additional infra cost.

The flow:
```
PriceCheckWorker detects target price
  → RedisStreamPublisher publishes to "price-alerts" stream
    → AlertDispatchWorker consumes
      → sends email + creates notification in MongoDB
```

### Background Workers

Two workers run as `BackgroundService`:

**PriceCheckWorker** — wakes up every 1 minute, fetches all products with `nextCheckAt <= now`, calls the Mercado Livre API for each, saves the snapshot and evaluates if the target price was reached.

**AlertDispatchWorker** — consumes the Redis Stream "price-alerts" and processes each event.

### Mercado Livre API integration

The `/items/{id}` endpoint returns 403 without the `items:read` permission — unavailable for new apps. The solution was to use catalog endpoints:

```
GET /products/{catalogId}        → product name and data
GET /products/{catalogId}/items  → seller list with prices
```

The monitored price is the lowest active price across all sellers. Only catalog URLs are supported (`/p/MLB...`).

---

## The frontend — Angular 20 SPA

The SPA was built with Angular 20: standalone components, `inject()`, Angular Signals, control flow (`@if`, `@for`), lazy loading with `loadComponent()`.

The design is inspired by Mercado Livre — yellow background, two-line navbar, white cards. The decision was intentional: PriceWatch integrates with ML, so making the SPA look like part of the same visual ecosystem creates coherence for the user.

### Main features

- Dashboard with lists and products summary
- `/items` — all user products with client-side search via query param
- Lists with analysis (lowest price, highest price, average)
- Price history with chart (Chart.js 4)
- In-app notifications via 30-second polling
- Bulk selection with batch actions (activate, pause, assign list, delete)
- Full auth: JWT in localStorage, interceptor, functional guards

### Why polling and not SSE for notifications

Price alert notifications happen a few times a day at most. Keeping an SSE connection permanently open to deliver something that rarely occurs doesn't deliver proportional value to the complexity. Polling every 30s has a maximum delay of half a minute on a notification expected in hours — imperceptible.

---

## The Chrome extension — Manifest V3

The extension solves the onboarding problem: without it, users would need to open the SPA, copy the product URL, and paste it into the registration field. With it, just click "Track with PriceWatch" directly on the ML product page.

### How it works

A content script is injected into all `mercadolivre.com.br` pages. It detects the buy box and injects the "Track with PriceWatch" button below "Buy now".

Since ML is a SPA, navigating between products doesn't reload the page. The content script uses `MutationObserver` on `document.body` to detect internal navigations and reinject the button after each product change.

The product URL is extracted from `<link rel="canonical">` — this removes tracking parameters and ensures a clean URL.

### Authentication

The extension has its own login popup. The user authenticates directly through the Chrome toolbar icon. The JWT token is saved in `chrome.storage.local` and read by the service worker on every API call. It doesn't depend on the SPA being open in another tab.

### Idempotent product registration

When the button is clicked, the backend checks if the product already exists for that user before creating:
- Active → returns as-is, no error
- Inactive → reactivates and returns
- Doesn't exist → creates

Zero 409 errors for the user, zero duplicates in the database.

---

## Deploy — home server with Cloudflare Tunnel

PriceWatch runs on my home server (Intel i5, 8GB RAM) via Docker Compose. Five containers: .NET API, MongoDB, Redis, Nginx, and Watchtower.

Nginx reverse-proxies on port 8083. Cloudflare Tunnel exposes the service to the internet without opening router ports — the server is behind CGNAT. The SPA lives on Vercel.

Deployment is automatic: `git push → GitHub Actions → Docker Hub → Watchtower detects new image → restarts container`. Zero manual intervention.

---

## Demo

[![Watch demo](https://raw.githubusercontent.com/GustavoDaMassa/PriceWatchExtension/main/icons/128.png)](https://www.youtube.com/watch?v=y6aXDqaX6HM)

[Watch demo on YouTube →](https://www.youtube.com/watch?v=y6aXDqaX6HM)
