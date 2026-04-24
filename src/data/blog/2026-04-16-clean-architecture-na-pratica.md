---
slug: "clean-architecture-na-pratica"
title: "Arquitetura limpa na prática"
title_en: "Clean architecture in practice"
date: "2026-04-16"
tags: ["Clean Architecture", "Java", "Arquitetura", "Testes"]
excerpt: "Uma visão contextualizada sobre algumas vantagens da Clean Architecture, usando a reimplementação da MediasAPI como exemplo prático."
excerpt_en: "A contextualized view of some Clean Architecture advantages, using the MediasAPI reimplementation as a practical example."
---

<!-- NARRATIVA -->
Na minha publicação anterior falei sobre o ClassView e uma das suas utilidades ser a visualização do que cada classe conhece no código.

Aproveitando esse gancho, quero falar sobre algumas vantagens da arquitetura limpa de forma contextualizada, porque há algum tempo fiz uma reimplementação da MediasAPI onde isso pode ser observado na prática.

A ideia central da Clean Architecture é simples: o domínio, onde vivem as regras de negócio, não conhece ninguém. Framework, banco de dados, segurança — tudo isso é detalhe de infraestrutura.

Os principais benefícios disso são claros: podemos trocar banco de dados, mecanismo de autenticação ou qualquer outro detalhe técnico sem mexer no domínio. E, ao meu ver, o ponto mais interessante é a testabilidade se tornar praticamente trivial, porque não é necessário subir Spring, banco em memória ou mocks de framework.

Isso acontece porque o domínio é Java puro. É apenas instanciar e testar. Sem essa arquitetura, entidades costumam carregar anotações do framework, o que exigiria um contexto JPA, por exemplo, até mesmo para testes.

Claro que ela não é automaticamente melhor do que arquitetura em camadas. Faz mais sentido em domínios com lógica de negócio mais complexa, que realmente precisam ser isolados e testados de forma independente.

No repositório da cleanMediasAPI há uma explicação mais completa sobre arquitetura limpa.

## Link

- [cleanMediasAPI](https://lnkd.in/dnUcxe7P)

<!-- NARRATIVA_EN -->
In my previous post I talked about ClassView and one of its uses: visualizing what each class knows inside the codebase.

Using that as a bridge, I want to talk about some advantages of Clean Architecture in a more contextualized way, because some time ago I built a reimplementation of MediasAPI where those advantages can be seen in practice.

The core idea of Clean Architecture is simple: the domain, where business rules live, knows no one. Framework, database, security — all of that is infrastructure detail.

The main benefits are clear: we can swap the database, the authentication mechanism or any other technical detail without touching the domain. And, in my view, the most interesting point is how testability becomes almost trivial, because there is no need to start Spring, an in-memory database or framework mocks.

That happens because the domain is plain Java. You just instantiate and test it. Without this architecture, entities often carry framework annotations, which would require a JPA context, for example, even for tests.

Of course, it is not automatically better than layered architecture. It makes more sense for domains with more complex business logic that truly need to be isolated and tested independently.

The cleanMediasAPI repository contains a more complete explanation of clean architecture.

## Link

- [cleanMediasAPI](https://lnkd.in/dnUcxe7P)
