---
slug: "classview-grafo-de-classes"
title: "ClassView - Grafo de Classes"
title_en: "ClassView - Class Graph"
date: "2026-04-15"
tags: ["React", "Arquitetura", "Análise Estática", "Frontend"]
excerpt: "Uma página web que analisa diretórios de código e exibe relações entre classes em forma de grafo, ajudando a visualizar acoplamento e arquitetura."
excerpt_en: "A web page that analyzes code directories and displays class relationships as a graph, helping visualize coupling and architecture."
---

<!-- NARRATIVA -->
![Interface do ClassView](/assets/images/classViewcard.png)

No dia a dia escrevendo código, acabamos criando diversas classes que se relacionam entre si de alguma forma, e precisamos nos preocupar com questões como acoplamento e arquitetura. Antes, eu procurava manter em cada projeto uma documentação chamada `classes.md`, onde listava todas as classes e suas dependências, mas era necessário atualizá-la constantemente conforme o projeto crescia.

Resolvi então centralizar isso, e aproveitando que eu estava estudando React, o resultado foi uma página web simples que não precisa nem mesmo de backend.

Nela, você carrega o diretório ou subdiretório que desejar e visualiza em um grafo as relações que quer analisar.

A aplicação tem suporte a várias linguagens:

- Java
- Kotlin
- C#
- TypeScript
- Python
- PHP
- Ruby

E permite observar relações como:

- Implementações
- Heranças
- Dependências por campos, parâmetros de métodos, tipos de retorno e criação de instâncias

Com isso, dá para analisar e observar indícios de dependências circulares, acoplamento indevido, quais classes são conhecidas por um domínio e outros sinais arquiteturais relevantes.

## Links

- [Repositório](https://lnkd.in/db3SM2Va)
- [ClassView](https://lnkd.in/dt5f-WpS)

<!-- NARRATIVA_EN -->
![ClassView interface](/assets/images/classViewcard.png)

In day-to-day coding, we end up creating many classes that relate to each other in different ways, and we need to care about concerns such as coupling and architecture. In the past, I used to keep a `classes.md` document in each project listing all classes and their dependencies, but it had to be updated constantly as the codebase grew.

So I decided to centralize that, and while studying React, the result became a simple web page that does not even need a backend.

In it, you load any directory or subdirectory you want and visualize, in graph form, the relationships you want to inspect.

The application supports multiple languages:

- Java
- Kotlin
- C#
- TypeScript
- Python
- PHP
- Ruby

And it lets you observe relationships such as:

- Implementations
- Inheritance
- Dependencies through fields, method parameters, return types and instance creation

That makes it possible to inspect signs of circular dependencies, improper coupling, which classes are known by a given domain and other relevant architectural signals.

## Links

- [Repository](https://lnkd.in/db3SM2Va)
- [ClassView](https://lnkd.in/dt5f-WpS)
