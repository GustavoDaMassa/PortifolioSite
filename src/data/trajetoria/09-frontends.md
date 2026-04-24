---
id: "frontends"
date: "2026-02"
dateEnd: "2026-04"
title: "Fechando o ciclo — frontends das APIs"
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
