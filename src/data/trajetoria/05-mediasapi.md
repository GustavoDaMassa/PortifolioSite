---
id: "mediasapi"
date: "2025-02"
dateEnd: "2026-04"
title: "MediasAPI"
subtitle: "Primeiro grande projeto — resolvendo uma dor real"
type: "projeto"
tags: ["Java 17", "Spring Boot", "Clean Architecture", "JWT", "Flyway", "MySQL", "Docker", "CI/CD", "Swagger"]
parallel: []
github: "https://github.com/GustavoDaMassa/MediasAPI"
---

<!-- NARRATIVA -->
A MediasAPI nasceu de uma dor real: calcular médias e simular notas para saber o que precisava tirar nas provas finais. Um problema que todo estudante conhece, mas que eu resolvi do jeito que um desenvolvedor resolve — construindo uma API.

O que me orgulha nesse projeto não é só o que ele faz, mas como foi construído. Antes de escrever uma linha de código, fui ao mesmo tempo o cliente e o engenheiro: levantei os requisitos como stakeholder e desenhei a solução como desenvolvedor. Todo o código foi escrito à mão, sem IA, linha por linha — cada detalhe foi debugado e entendido.

Para o algoritmo de cálculo de expressões matemáticas arbitrárias, apliquei conceitos de Linguagens Formais e Autômatos (LFA) e Fundamentos Matemáticos da Computação que estudava em paralelo na faculdade: Regex para validação e o algoritmo Shunting Yard com notação RPN para avaliar as fórmulas.

Foi o projeto onde me tornei engenheiro de software na prática.

<!-- TECNICO -->
API REST em Java 17 com Spring Boot. Arquitetura em camadas com separação clara de responsabilidades: Controller → Service → Repository. Autenticação JWT com roles ADMIN/USER e suporte a Form Login. Migrations com Flyway, banco MySQL em produção e H2 para testes.

O diferencial técnico está no motor de cálculo: expressões matemáticas arbitrárias são validadas com Regex (conceito de LFA) e avaliadas com o algoritmo Shunting Yard + notação polonesa reversa (RPN) — aplicação direta de teoria de autômatos e pilhas estudada nas disciplinas de FMC e LFA na UFG.

Deploy com Docker + Nginx em produção, CI/CD com GitHub Actions → Docker Hub → Watchtower (auto-deploy). Documentação com Swagger/OpenAPI. Projeto disponível em produção.
