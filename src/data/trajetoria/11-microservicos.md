---
id: "microservicos"
date: "2026-04"
title: "Microserviços e presença pública"
title_en: "Microservices and Public Presence"
type: "marco"
tags: ["Microserviços", "Apache Kafka", "Docker", "Spring Boot", "Java", "LinkedIn"]
parallel: []
github: "https://github.com/GustavoDaMassa/MSFinanceApi"
---

<!-- NARRATIVA -->
O passo natural depois de dominar uma aplicação monolítica bem estruturada era entender como ela se fragmenta. O MSFinanceApi foi essa experiência: decompor a FinanceAPI em quatro serviços independentes que se comunicam de forma assíncrona.

A restrição de hardware foi mais um exercício do que um obstáculo — otimizar Kafka para rodar com 256MB de heap num servidor com 8GB compartilhados entre vários containers é o tipo de problema que aparece em produção real.

Em paralelo, comecei a documentar publicamente essa jornada no LinkedIn — não apenas os projetos, mas o raciocínio por trás de cada decisão.

<!-- TECNICO -->
MSFinanceApi: mono-repo com 4 serviços Spring Boot comunicando via Apache Kafka. Cada serviço tem sua responsabilidade isolada, banco de dados próprio e deploy independente via Docker Compose. Configuração de Kafka com heap reduzido (`-Xmx256m`) para viabilizar execução no home server com recursos limitados. LinkedInVlogPosts: repositório de posts técnicos com 27 commits, documentando decisões arquiteturais e aprendizados da trajetória.

<!-- NARRATIVA_EN -->
The natural next step after mastering a well-structured monolithic application was to understand how it breaks apart. MSFinanceApi was that experience: decomposing FinanceAPI into four independent services that communicate asynchronously.

The hardware constraint was more of an exercise than an obstacle — optimizing Kafka to run with 256MB of heap on a server with 8GB shared among several containers is exactly the kind of problem that shows up in real production.

In parallel, I started publicly documenting this journey on LinkedIn — not just the projects, but the reasoning behind each decision.

<!-- TECNICO_EN -->
MSFinanceApi: mono-repo with 4 Spring Boot services communicating via Apache Kafka. Each service has isolated responsibility, its own database and independent deployment via Docker Compose. Kafka configured with reduced heap (`-Xmx256m`) to enable execution on the home server with limited resources. LinkedInVlogPosts: repository of technical posts with 27 commits, documenting architectural decisions and lessons learned throughout the journey.
