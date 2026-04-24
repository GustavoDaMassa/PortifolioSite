---
id: "refatoracao"
date: "2026-03"
dateEnd: "2026-04"
title: "Refatoração consciente e arquitetura limpa"
type: "aprendizado"
tags: ["Clean Architecture", "SOLID", "Java", "Spring Boot"]
parallel: ["clean-mediasapi", "classview", "build-to-learn"]
github: ""
---

<!-- NARRATIVA -->
Depois de construir, o próximo passo foi desconstruir e reconstruir melhor. Voltei aos projetos com um olhar mais maduro — não para corrigir bugs, mas para questionar cada decisão arquitetural.

O BuildToLearn foi literalmente isso: reescrever do zero de forma consciente, sabendo o destino antes de sair. O ClassView foi o oposto — começar um projeto novo já com documentação de requisitos e arquitetura definida antes da primeira linha de código. A cleanMediasAPI foi uma refatoração dirigida, isolando o que havia aprendido sobre Clean Architecture.

<!-- TECNICO -->
Três frentes simultâneas: cleanMediasAPI (refatoração da MediasAPI com separação estrita de camadas seguindo Clean Architecture), BuildToLearn/mediascopy (reconstrução do zero da MediasAPI para internalizar as decisões arquiteturais), e ClassView (novo projeto com documentação completa de requisitos e diagrama de arquitetura antes do início da implementação — 27 commits). Período de consolidação de SOLID, design patterns e princípios de arquitetura limpa.
