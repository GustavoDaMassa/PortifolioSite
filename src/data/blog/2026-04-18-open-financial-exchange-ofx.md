---
slug: "open-financial-exchange-ofx"
title: "Open Financial Exchange - OFX"
title_en: "Open Financial Exchange - OFX"
date: "2026-04-21"
tags: ["Open Finance", "OFX", "Java", "Backend"]
excerpt: "Como a FinanceAPI ganhou importação de extratos OFX para contornar a limitação prática do Open Finance fora do sandbox."
excerpt_en: "How FinanceAPI gained OFX bank statement import to work around the practical limitation of Open Finance outside the sandbox."
---

<!-- NARRATIVA -->
A FinanceAPI já suportava duas formas de registrar transações: manualmente ou de forma automática com Open Finance via webhook.

No entanto, a integração com Open Finance funciona apenas no ambiente sandbox. Em produção, ela exige aprovação do Banco Central, o que está fora do meu alcance atual.

A solução foi implementar suporte à importação de extratos bancários em formato OFX, um padrão de intercâmbio de dados financeiros que existia antes do Open Finance e que a maioria dos bancos brasileiros ainda exporta.

O módulo de importação aceita o arquivo via upload, faz o parse suportando OFX 1.x em SGML e OFX 2.x em XML, e importa as transações automaticamente para a conta selecionada. Duplicatas são detectadas e ignoradas.

Junto com essa nova funcionalidade, os dashboards, que antes eram estáticos e carregados no início de cada login, passaram a ser gerados a cada filtro realizado pelo usuário.

Assim, a análise ficou mais dinâmica e personalizada, de acordo com os filtros que cada usuário preferir.

[Vídeo da importação](/assets/videos/ImportOFX.mp4)

<!-- NARRATIVA_EN -->
FinanceAPI already supported two ways of registering transactions: manually or automatically through Open Finance via webhook.

However, the Open Finance integration only works in the sandbox environment. In production, it requires approval from Brazil's Central Bank, which is currently outside my reach.

The solution was to implement support for importing bank statements in OFX format, a financial data exchange standard that existed before Open Finance and is still exported by most Brazilian banks.

The import module accepts the file through upload, parses both OFX 1.x in SGML and OFX 2.x in XML, and automatically imports the transactions into the selected account. Duplicates are detected and ignored.

Along with this new feature, the dashboards, which were previously static and loaded only at login time, can now be generated for every filter chosen by the user.

That makes the analysis more dynamic and personalized, according to whichever filters the user prefers.

[Import video](/assets/videos/ImportOFX.mp4)
