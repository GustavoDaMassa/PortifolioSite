---
id: "pricewatch"
date: "2026-05"
title: "PriceWatch"
title_en: "PriceWatch"
subtitle: "Monitor de preços do Mercado Livre — do backend ao Chrome"
subtitle_en: "Mercado Livre price monitor — from backend to Chrome"
type: "projeto"
tags: [".NET 8", "Clean Architecture", "MongoDB", "Redis", "Angular 20", "Chrome Extension", "Docker", "Home Server"]
parallel: []
github: "https://github.com/GustavoDaMassa/PriceWatch"
---

<!-- NARRATIVA -->
O PriceWatch nasceu de um problema real: querer comprar um produto, mas o preço ainda não estar onde você quer. A solução foi construir um monitor completo — você cola a URL, define o preço-alvo, e recebe um alerta quando o momento chegar.

O projeto foi a primeira vez que construí algo completo em .NET. Não um tutorial, não um CRUD — uma aplicação com Clean Architecture estrita, integração com uma API externa, mensageria assíncrona e deploy em produção. A escolha foi intencional: já dominava o ecossistema Java/Spring Boot e queria expandir para o Microsoft stack com um projeto real.

O que mais me marcou foi a extensão Chrome. Manifest V3 tem restrições que forçam a pensar diferente: sem acesso persistente à memória, sem DOM direto, comunicação por mensagens. Entender esses limites e construir dentro deles foi um aprendizado à parte.

<!-- TECNICO -->
API em .NET 8 com Clean Architecture estrita — quatro camadas com dependências sempre apontando para dentro. MongoDB como banco de dados principal, Redis para rate limiting e Redis Streams como mensageria leve (em vez de Kafka, desnecessário para o volume do projeto). Dois background workers: `PriceCheckWorker` verifica preços a cada hora via API do Mercado Livre, `AlertDispatchWorker` consome o stream e dispara e-mails via SMTP.

SPA em Angular 20 com standalone components, Angular Signals e Chart.js para histórico de preços. Extensão Chrome em Manifest V3 com content script, MutationObserver para SPAs e popup de autenticação independente do SPA.

Deploy no home server via Docker Compose, exposto pela Cloudflare Tunnel. CI/CD automático com GitHub Actions + Docker Hub + Watchtower.

<!-- NARRATIVA_EN -->
PriceWatch was born from a real problem: wanting to buy a product but the price not being where you want it yet. The solution was to build a complete monitor — you paste the URL, set the target price, and receive an alert when the moment comes.

The project was the first time I built something complete in .NET. Not a tutorial, not a CRUD — an application with strict Clean Architecture, external API integration, async messaging and a production deployment. The choice was intentional: I already dominated the Java/Spring Boot ecosystem and wanted to expand into the Microsoft stack with a real project.

What stood out most was the Chrome extension. Manifest V3 has restrictions that force you to think differently: no persistent memory access, no direct DOM, communication through messages. Understanding those limits and building within them was a separate learning experience.

<!-- TECNICO_EN -->
API in .NET 8 with strict Clean Architecture — four layers with dependencies always pointing inward. MongoDB as the main database, Redis for rate limiting and Redis Streams as lightweight messaging (instead of Kafka, unnecessary for the project's volume). Two background workers: `PriceCheckWorker` checks prices every hour via the Mercado Livre API, `AlertDispatchWorker` consumes the stream and dispatches emails via SMTP.

SPA in Angular 20 with standalone components, Angular Signals and Chart.js for price history. Chrome extension in Manifest V3 with content script, MutationObserver for SPAs and an authentication popup independent of the SPA.

Deployed on home server via Docker Compose, exposed through Cloudflare Tunnel. Automated CI/CD with GitHub Actions + Docker Hub + Watchtower.
