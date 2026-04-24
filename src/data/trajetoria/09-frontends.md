---
id: "frontends"
date: "2026-02"
dateEnd: "2026-04"
title: "Fechando o ciclo — frontends das APIs"
title_en: "Closing the Loop — API Frontends"
type: "aprendizado"
tags: ["Angular", "Vue.js", "TypeScript", "i18n"]
parallel: ["finance-frontend", "medias-frontend"]
github: ""
---

<!-- NARRATIVA -->
Sempre me identifiquei com back-end, mas sentia que os projetos estavam incompletos sem uma interface. Decidi fechar esse ciclo desenvolvendo os frontends da FinanceAPI e da MediasAPI.

Escolhi Angular para a FinanceAPI — um framework com filosofia mais próxima do Java e do mundo enterprise, o que facilitou a adaptação. Para a MediasAPI usei Vue.js, uma experiência mais leve e diferente. Dois frameworks, dois estilos, uma visão mais completa do ecossistema front-end.

<!-- TECNICO -->
FinanceSite: SPA em Angular com TypeScript, integração via GraphQL com a FinanceAPI, autenticação JWT no client, suporte a internacionalização (PT/EN) e 118 commits de desenvolvimento contínuo. MediasSite: SPA em Vue.js + Vite, consumindo a REST API da MediasAPI, com 51 commits. Ambos containerizados e integrados ao fluxo de CI/CD existente.

<!-- NARRATIVA_EN -->
I always identified more with back-end, but I felt the projects were incomplete without an interface. I decided to close that loop by developing the frontends for FinanceAPI and MediasAPI.

I chose Angular for FinanceAPI — a framework with a philosophy closer to Java and the enterprise world, which made the transition easier. For MediasAPI I used Vue.js, a lighter and different experience. Two frameworks, two styles, a more complete view of the front-end ecosystem.

<!-- TECNICO_EN -->
FinanceSite: Angular SPA with TypeScript, GraphQL integration with FinanceAPI, client-side JWT authentication, internationalization support (PT/EN) and 118 commits of continuous development. MediasSite: Vue.js + Vite SPA consuming the MediasAPI REST API, with 51 commits. Both containerized and integrated into the existing CI/CD pipeline.
