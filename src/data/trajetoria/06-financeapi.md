---
id: "financeapi"
date: "2025-06"
dateEnd: "2026-03"
title: "FinanceAPI"
subtitle: "Arquitetura orientada a eventos e integração real com Open Finance"
type: "projeto"
tags: ["Java 21", "Spring Boot", "GraphQL", "Apache Kafka", "PostgreSQL", "Docker", "Clean Architecture", "JWT", "Flyway"]
parallel: []
github: "https://github.com/GustavoDaMassa/FinanceAPI"
---

<!-- NARRATIVA -->
A FinanceAPI veio do mesmo lugar que a MediasAPI: uma dor do dia a dia. Queria uma forma de gerenciar minhas finanças pessoais integrando com dados bancários reais — e isso significava entrar num território novo: Open Finance.

Para integrar com o ecossistema bancário, estudei a documentação real da Pluggy, uma empresa agregadora financeira, e entendi como configurar minha solução dentro do modelo deles. Não foi um tutorial — foi análise de documentação técnica de uma empresa de verdade para resolver um problema de verdade.

Esse projeto também marcou minha entrada consciente no uso de IA generativa como ferramenta de desenvolvimento. Não para substituir o raciocínio, mas para acelerar o acesso à documentação e explorar possibilidades — uma adaptação intencional ao cenário atual.

<!-- TECNICO -->
API GraphQL em Java 21 com Spring Boot 3.5. Arquitetura limpa em 5 camadas com separação estrita de domínio, aplicação e infraestrutura. Webhooks assíncronos processados via Apache Kafka (arquitetura orientada a eventos). Integração com a API da Pluggy (Open Finance / agregador bancário) — requer análise da documentação oficial para configuração de webhooks e autenticação.

PostgreSQL com Flyway para migrations. Autenticação JWT. Deploy containerizado com Docker Compose. A limitação atual é que a integração com contas bancárias reais exige conta empresarial paga na Pluggy — o projeto opera com sandbox e dados mockados.
