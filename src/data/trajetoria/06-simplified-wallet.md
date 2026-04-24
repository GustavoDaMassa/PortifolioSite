---
id: "simplified-wallet"
date: "2023-08"
title: "SimplifiedWallet"
title_en: "SimplifiedWallet"
type: "projeto"
tags: ["Java", "Spring Boot", "Regras de negócio"]
parallel: []
github: ""
---

<!-- NARRATIVA -->
Depois de dominar CRUDs mais diretos, quis encarar um problema com mais regra de negócio. O SimplifiedWallet foi esse passo: um sistema de transferências onde não bastava salvar dados, era preciso validar comportamento.

Foi um momento importante porque comecei a perceber a diferença entre uma API que só expõe endpoints e uma aplicação que precisa proteger invariantes de domínio.

<!-- TECNICO -->
Implementação de transferências financeiras com validação de saldo, diferentes tipos de usuário e tratamento de exceções de domínio. O projeto exigiu separar com mais cuidado a lógica de negócio da infraestrutura e reforçou a importância da camada de serviço como centro das regras da aplicação.

<!-- NARRATIVA_EN -->
After becoming comfortable with more straightforward CRUDs, I wanted to face a problem with stronger business rules. SimplifiedWallet was that step: a transfer system where saving data was not enough — behavior itself had to be validated.

It was an important moment because I started to see the difference between an API that only exposes endpoints and an application that needs to protect domain invariants.

<!-- TECNICO_EN -->
Implementation of financial transfers with balance validation, different user types and domain exception handling. The project required more careful separation between business logic and infrastructure and reinforced the importance of the service layer as the center of the application's rules.
