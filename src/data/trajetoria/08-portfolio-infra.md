---
id: "portfolio-infra"
date: "2025-11"
title: "Portfólio, produção e infraestrutura"
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
