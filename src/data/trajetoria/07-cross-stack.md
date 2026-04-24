---
id: "cross-stack"
date: "2025-10"
title: "Expansão cross-stack — .NET e Node.js"
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
