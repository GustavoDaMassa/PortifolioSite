---
slug: "microservicos"
title: "Microserviços"
title_en: "Microservices"
date: "2026-04-22"
tags: ["Microservices", ".NET", "ASP.NET Core", "Kafka"]
excerpt: "A reimplementação da FinanceAPI como microserviços em .NET, distribuída em quatro serviços independentes e executada em máquinas diferentes na AWS."
excerpt_en: "The reimplementation of FinanceAPI as microservices in .NET, split into four independent services and running on different AWS machines."
---

<!-- NARRATIVA -->
![Microserviços rodando na AWS](/assets/images/MSFin.png)

*Aplicação funcionando em diferentes máquinas na AWS na região North Virginia.*

A FinanceAPI é o projeto em que mais venho evoluindo a cada dia. Atualmente estou estudando Sistemas Distribuídos na faculdade e decidi reimplementá-la como microserviços, porque era a aplicação que fazia mais sentido para esse exercício.

Dessa vez resolvi desenvolver em .NET com ASP.NET Core e C#. A API conta com injeção de dependência, GraphQL, Kafka, JWT e suporte a OFX.

A arquitetura ficou dividida em 4 serviços:

- Identity — autenticação, geração e validação de JWT
- Finance — contas, transações, categorias, integração bancária, importação OFX e GraphQL
- Webhook — recebe eventos do Pluggy e publica no Kafka
- Gateway — ponto de entrada único, roteamento e propagação de identidade entre serviços

Cada serviço tem seu próprio banco de dados. A comunicação entre Finance e Webhook é assíncrona via Kafka. O Gateway propaga o usuário autenticado como header para os serviços internos, sem que eles precisem validar o JWT diretamente.

O resultado é um sistema em que cada peça pode evoluir, escalar ou falhar de forma independente.

Cada microserviço está rodando em uma máquina diferente na AWS, na região North Virginia.

## Link

- [Repositório](https://lnkd.in/dfG7aCnf)

<!-- NARRATIVA_EN -->
![Microservices running on AWS](/assets/images/MSFin.png)

*Application running on different AWS machines in the North Virginia region.*

FinanceAPI is the project where I keep evolving the most. I am currently studying Distributed Systems at university, and I decided to reimplement it as microservices because it was the application that made the most sense for this exercise.

This time I chose to build it in .NET with ASP.NET Core and C#. The API includes dependency injection, GraphQL, Kafka, JWT and OFX support.

The architecture was split into 4 services:

- Identity — authentication, JWT generation and validation
- Finance — accounts, transactions, categories, banking integration, OFX import and GraphQL
- Webhook — receives Pluggy events and publishes them to Kafka
- Gateway — single entry point, routing and identity propagation across services

Each service has its own database. Communication between Finance and Webhook is asynchronous through Kafka. The Gateway propagates the authenticated user as a header to internal services, so they do not need to validate the JWT directly.

The result is a system where each piece can evolve, scale or fail independently.

Each microservice is running on a different AWS machine in the North Virginia region.

## Link

- [Repository](https://lnkd.in/dfG7aCnf)
