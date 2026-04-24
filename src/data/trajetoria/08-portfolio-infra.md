---
id: "portfolio-infra"
date: "2025-11"
title: "Portfólio, produção e infraestrutura"
title_en: "Portfolio, Production and Infrastructure"
type: "marco"
tags: ["React", "Docker", "Nginx", "CI/CD", "GitHub Actions", "Cloudflare", "SSL", "CORS"]
parallel: []
github: "https://github.com/GustavoDaMassa/gustavodevsite"
---

<!-- NARRATIVA -->
Chegar até aqui foi importante, mas não bastava — era preciso mostrar. Construí meu portfólio em React e coloquei os projetos em produção de verdade.

Colocar algo em produção ensina o que nenhum tutorial cobre: CORS, SSL, variáveis de ambiente, reverse proxy, domínios. A MediasAPI foi primeiro para a AWS, mas o custo me levou a uma decisão que acabou sendo muito mais valiosa: configurar um servidor próprio num PC antigo. Ali aprendi infraestrutura de verdade — Nginx, Docker Compose, Cloudflare Tunnel para acesso externo sem abrir portas no roteador, auto-deploy com Watchtower.

O que parecia uma limitação financeira virou um laboratório de DevOps.

<!-- TECNICO -->
Portfólio construído em React com Vite, CSS Modules e Framer Motion. Deploy na Vercel com suporte a PT/EN via i18next.

Infraestrutura do home server: Ubuntu 24.04 em hardware próprio (i5-3330, 8GB RAM), Docker Compose com containers para a aplicação, PostgreSQL, Kafka, Zookeeper e Nginx. Acesso externo via Cloudflare Tunnel — sem portas abertas no roteador. SSL gerenciado pela Cloudflare, Nginx escuta HTTP internamente. CI/CD com GitHub Actions → Docker Hub → Watchtower (auto-deploy a cada push na main). Domínio `financeapi.com.br` com DNS na Cloudflare.

<!-- NARRATIVA_EN -->
Getting this far mattered, but it wasn't enough — it had to be shown. I built my portfolio in React and deployed the projects into real production.

Putting something in production teaches what no tutorial covers: CORS, SSL, environment variables, reverse proxy, domains. MediasAPI went to AWS first, but the cost led me to a decision that turned out to be far more valuable: setting up my own server on an old PC. There I learned real infrastructure — Nginx, Docker Compose, Cloudflare Tunnel for external access without opening router ports, auto-deploy with Watchtower.

What seemed like a financial constraint turned into a DevOps lab.

<!-- TECNICO_EN -->
Portfolio built in React with Vite, CSS Modules and Framer Motion. Deployed on Vercel with PT/EN support via i18next.

Home server infrastructure: Ubuntu 24.04 on personal hardware (i5-3330, 8GB RAM), Docker Compose with containers for the application, PostgreSQL, Kafka, Zookeeper and Nginx. External access via Cloudflare Tunnel — no open router ports. SSL managed by Cloudflare, Nginx listens on HTTP internally. CI/CD with GitHub Actions → Docker Hub → Watchtower (auto-deploy on every push to main). Domain `financeapi.com.br` with DNS on Cloudflare.
