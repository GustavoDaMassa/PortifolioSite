---
id: "cross-stack"
date: "2025-10"
title: "Expansão cross-stack — .NET e Node.js"
title_en: "Cross-Stack Expansion — .NET and Node.js"
type: "aprendizado"
tags: ["C#", "ASP.NET Core", "TypeScript", "NestJS", "Entity Framework", "TypeORM"]
parallel: ["dotnet-mediasapi", "dotnet-financeapi", "node-mediasapi"]
github: ""
---

<!-- NARRATIVA -->
Depois de dois projetos sólidos em Java, percebi um risco: em processos seletivos que pediam outras stacks, eu não teria nada para mostrar. A solução foi direta — reimplementar o que já conhecia bem em outras linguagens.

Escolhi .NET e Node.js. Com o contexto arquitetural dos projetos já bem definido na cabeça, a transição foi surpreendentemente rápida, especialmente com o apoio da IA para navegar a documentação das novas ferramentas. Isso confirmou algo que já suspeitava: quando a base é sólida, trocar de stack é questão de tempo, não de capacidade.

<!-- TECNICO -->
Reimplementações da MediasAPI e FinanceAPI em dois ecossistemas distintos. Em .NET: C# com ASP.NET Core, Entity Framework Core e padrões equivalentes aos do Spring. Em Node.js: TypeScript com NestJS (framework com arquitetura modular análoga ao Spring), TypeORM e Jest para testes e2e. O objetivo deliberado foi validar a portabilidade do conhecimento arquitetural — Clean Architecture e separação de camadas se traduziram diretamente entre as stacks.

<!-- NARRATIVA_EN -->
After two solid projects in Java, I noticed a risk: in selection processes that asked for other stacks, I'd have nothing to show. The solution was straightforward — reimplement what I already knew well in other languages.

I chose .NET and Node.js. With the architectural context of the projects already well-defined in my head, the transition was surprisingly fast, especially with AI assistance for navigating the new tools' documentation. This confirmed something I'd already suspected: when the foundation is solid, switching stacks is a matter of time, not ability.

<!-- TECNICO_EN -->
Reimplementations of MediasAPI and FinanceAPI across two distinct ecosystems. In .NET: C# with ASP.NET Core, Entity Framework Core and Spring-equivalent patterns. In Node.js: TypeScript with NestJS (a framework with modular architecture analogous to Spring), TypeORM and Jest for e2e tests. The deliberate goal was to validate the portability of architectural knowledge — Clean Architecture and layer separation translated directly across stacks.
