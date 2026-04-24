---
id: "mediasapi"
date: "2024-03"
title: "MediasAPI"
title_en: "MediasAPI"
subtitle: "Primeiro grande projeto — resolvendo uma dor real"
subtitle_en: "First major project — solving a real pain point"
type: "projeto"
tags: ["Java 17", "Spring Boot", "Clean Architecture", "JWT", "Flyway", "MySQL", "Docker", "CI/CD", "Swagger"]
parallel: []
github: "https://github.com/GustavoDaMassa/MediasAPI"
---

<!-- NARRATIVA -->
A MediasAPI nasceu de uma dor real: calcular médias e simular notas para saber o que precisava tirar nas provas finais. Um problema que todo estudante conhece, mas que eu resolvi do jeito que um desenvolvedor resolve — construindo uma API.

O que me orgulha nesse projeto não é só o que ele faz, mas como foi construído. Antes de escrever uma linha de código, fui ao mesmo tempo o cliente e o engenheiro: levantei os requisitos como stakeholder e desenhei a solução como desenvolvedor. Todo o código foi escrito à mão, sem IA, linha por linha — cada detalhe foi debugado e entendido.

Para o algoritmo de cálculo de expressões matemáticas arbitrárias, apliquei conceitos de Linguagens Formais e Autômatos e Fundamentos Matemáticos da Computação que estudava em paralelo na faculdade: Regex para validação e o algoritmo Shunting Yard com notação RPN para avaliar as fórmulas.

Foi o projeto onde me tornei engenheiro de software na prática.

<!-- TECNICO -->
API REST em Java 17 com Spring Boot. Arquitetura em camadas com separação clara de responsabilidades: Controller → Service → Repository. Autenticação JWT com roles ADMIN/USER, migrations com Flyway, MySQL em produção e H2 para testes.

O diferencial técnico está no motor de cálculo: expressões matemáticas arbitrárias são validadas com Regex e avaliadas com o algoritmo Shunting Yard + notação polonesa reversa. A solução conecta teoria acadêmica a um problema de produto real.

Deploy com Docker + Nginx em produção, CI/CD com GitHub Actions → Docker Hub → Watchtower e documentação com Swagger/OpenAPI.

<!-- NARRATIVA_EN -->
MediasAPI was born from a real pain point: calculating grade averages and simulating scores to know what I needed on final exams. A problem every student knows, but one I solved the way a developer solves things — by building an API.

What I'm proud of in this project isn't just what it does, but how it was built. Before writing a single line of code, I was both the client and the engineer: I gathered requirements as a stakeholder and designed the solution as a developer. Every line of code was written by hand, without AI — each detail debugged and understood.

For the algorithm that evaluates arbitrary mathematical expressions, I applied concepts from Formal Languages and Automata and Mathematical Foundations of Computing that I was studying in parallel at university: Regex for validation and the Shunting Yard algorithm with RPN notation to evaluate formulas.

This was the project where I became a software engineer in practice.

<!-- TECNICO_EN -->
REST API in Java 17 with Spring Boot. Layered architecture with clear separation of responsibilities: Controller → Service → Repository. JWT authentication with ADMIN/USER roles, Flyway migrations, MySQL in production and H2 for tests.

The technical highlight is the calculation engine: arbitrary mathematical expressions are validated with Regex and evaluated with the Shunting Yard algorithm plus Reverse Polish Notation. The solution connects academic theory to a real product problem.

Deployment used Docker + Nginx in production, CI/CD with GitHub Actions → Docker Hub → Watchtower and Swagger/OpenAPI documentation.
