---
id: "microservicos"
date: "2026-04"
title: "Microserviços e presença pública"
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
