---
id: "producao-infra"
date: "2025-09"
title: "Produção e infraestrutura"
title_en: "Production and Infrastructure"
type: "marco"
tags: ["Docker", "Nginx", "CI/CD", "GitHub Actions", "Cloudflare", "SSL", "Home Server"]
parallel: []
github: ""
---

<!-- NARRATIVA -->
A primeira vez que coloquei a MediasAPI em produção foi na AWS — e o custo me levou a uma decisão que acabou sendo mais valiosa: configurar um servidor próprio num PC antigo. Ali aprendi infraestrutura de verdade: Nginx, Docker Compose, Cloudflare Tunnel para acesso externo sem abrir porta no roteador, SSL gerenciado pela Cloudflare, auto-deploy com Watchtower. O que parecia limitação financeira virou laboratório de DevOps — hardware modesto (i5-3330, 8GB RAM), domínio próprio (`financeapi.com.br`), tudo rodando em casa.

<!-- NARRATIVA_EN -->
The first time I put MediasAPI into production was on AWS — and the cost led me to a decision that turned out to be more valuable: setting up my own server on an old PC. There I learned real infrastructure: Nginx, Docker Compose, Cloudflare Tunnel for external access without opening a router port, SSL managed by Cloudflare, auto-deploy with Watchtower. What looked like a financial constraint turned into a DevOps lab — modest hardware (i5-3330, 8GB RAM), my own domain (`financeapi.com.br`), all running at home.
