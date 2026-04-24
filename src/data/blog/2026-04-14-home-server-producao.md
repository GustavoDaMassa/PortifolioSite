---
slug: "home-server-producao"
title: "Rodando produção em um servidor pessoal"
title_en: "Running production on a personal server"
date: "2026-04-14"
tags: ["Infraestrutura", "Docker", "Cloudflare", "Home Server"]
excerpt: "Como transformei uma máquina antiga em um servidor pessoal de produção, contornando CGNAT com Cloudflare Tunnel e automatizando deploy com Watchtower."
excerpt_en: "How I turned an old machine into a personal production server, bypassing CGNAT with Cloudflare Tunnel and automating deployments with Watchtower."
---

<!-- NARRATIVA -->
Quero comentar uma ideia que tive recentemente, em que saí um pouco do padrão mais comum de soluções.

Na área de desenvolvimento existem várias plataformas onde podemos colocar aplicações em produção. Eu utilizo AWS e Oracle Cloud, mas os planos free tier têm algumas limitações, e eu não pretendia aumentar meu custo nesse momento.

Como eu tinha uma máquina antiga em casa com 16GB de RAM, resolvi configurá-la como meu próprio servidor pessoal de produção.

Foi um desafio interessante, e o principal obstáculo foi o CGNAT da operadora. Sem IP público próprio, abrir portas diretamente no roteador não era uma opção. A solução foi usar o Cloudflare Tunnel: uma conexão de saída do servidor para a Cloudflare, sem nenhuma porta aberta no roteador. Até o acesso remoto via SSH passou a funcionar por esse caminho, de qualquer lugar, sem VPN.

Para deploy, usei Watchtower, um serviço que monitora o Docker Hub e atualiza o container assim que uma nova imagem é publicada.

O objetivo não era montar um servidor profissional, mas um servidor amador que resolvesse meu cenário com eficiência. Foi uma solução temporária, mas com controle total, bom aproveitamento de memória e capacidade suficiente para publicar minhas aplicações com folga na web.

## Documentação

- [Documentação detalhada](https://lnkd.in/dYTSsc_q)

<!-- NARRATIVA_EN -->
I wanted to share an idea I had recently, one where I moved a bit away from the usual solution pattern.

In software development there are many platforms where we can deploy applications to production. I use AWS and Oracle Cloud, but free tier plans have limitations, and I did not want to increase my costs for now.

Since I had an old machine at home with 16GB of RAM, I decided to configure it as my own personal production server.

It was an interesting challenge, and the biggest obstacle was my ISP's CGNAT. Without my own public IP, opening ports directly on the router was not an option. The solution was Cloudflare Tunnel: an outbound connection from the server to Cloudflare, with no ports opened on the router. Even remote SSH access started going through that path, from anywhere, without a VPN.

For deployment, I used Watchtower, a service that monitors Docker Hub and updates the container as soon as a new image is published.

The goal was not to build a professional-grade server, but an amateur one that solved my scenario efficiently. It was a temporary solution, but with full control, good memory usage and enough capacity to host my applications comfortably on the web.

## Documentation

- [Detailed documentation](https://lnkd.in/dYTSsc_q)
