# Estilo Editorial — Blog e Trajetória do Portfólio

Decisão de 10/09/2026, resultado de discussão sobre a estratégia de distribuição de conteúdo entre LinkedIn e site pessoal. Registro completo da decisão em memória: `estrategia-conteudo-linkedin-blog`.

## Arquitetura de conteúdo

Cada tema técnico vira três peças, não uma reaproveitada de forma comprimida nas outras:

1. **Post curto do LinkedIn** — autocontido, ~100-250 palavras, um recorte específico do tema (não um resumo do resto). Nunca contém link no corpo nem no comentário — ver "Sobre links" abaixo.
2. **Artigo do LinkedIn** (ferramenta nativa de long-form da plataforma) — o texto aprofundado, publicado dentro do próprio LinkedIn.
3. **Post do blog** (este repositório, `src/data/blog/`) — o mesmo texto aprofundado do Artigo, espelhado aqui como repositório permanente.

O guia de voz, estrutura e tom (título, abertura, progressão dor → consequência → paradoxo → solução → mecanismo → conclusão) é o já definido na skill `/new-post` (`~/.claude/commands/new-post.md`) — essa é a fonte de verdade pra craft de escrita, vale tanto pro Artigo do LinkedIn quanto pro blog do site, já que os dois carregam o mesmo texto em formatos diferentes.

## Por que duplicar texto entre Artigo e blog

Normalmente conteúdo duplicado entre dois domínios é um problema de SEO — buscadores tendem a indexar só a fonte de maior autoridade, e o site próprio perde crédito. Decidimos que isso não se aplica aqui porque **este site não depende de tráfego de busca**. O modelo de acesso é direto: recrutador, CEO ou cliente que já chegou até o dev por outro canal (currículo, LinkedIn, indicação) e quer ver o repositório de trabalho — não alguém que encontrou o post via Google.

## Sobre links (regra que motivou essa arquitetura)

O algoritmo do LinkedIn penaliza link externo tanto no corpo do post quanto no comentário — perda de alcance documentada, e link em comentário é tratado como "comportamento-ponte" desde 2026 (mesma penalização do link no corpo). Por isso:

- O post curto nunca leva link — pode citar que existe o Artigo em texto puro ("o caso completo está fixado no perfil"), sem depender do clique pra valer a pena.
- **Hipótese ainda não testada:** um link do post pro próprio Artigo do LinkedIn (mesmo domínio — o leitor não sai da plataforma) pode não sofrer essa penalização, diferente de link externo. Vale validar com teste A/B antes de tratar como regra confirmada — por ora, não assumir que está liberado.

## Pendência de implementação

O blog ainda não tem como linkar de volta pro Artigo do LinkedIn (pra concentrar comentários lá, já que o blog do site não tem sistema de comentários próprio). Proposta:

- Campo `linkedin_article_url` no frontmatter do post (ver contrato abaixo)
- Um CTA no template do post (`src/pages/Blog`) exibido quando o campo existir: algo como "Comentar no LinkedIn →"

Entra na Fase B do retrofit do portfólio (Modo Produto) — ainda não implementado no código.

## Contrato do frontmatter

```
---
slug: "<slug>"
title: "<título em português>"
title_en: "<título em inglês>"
title_it: "<título em italiano>"
date: "YYYY-MM-DD"
tags: ["Tag1", "Tag2"]
excerpt: "<resumo em português>"
excerpt_en: "<resumo em inglês>"
excerpt_it: "<resumo em italiano>"
linkedin_article_url: "<url do Artigo, adicionar depois de publicado — campo ainda sem suporte visual, ver Pendência acima>"
---
```

Estrutura do conteúdo (o blog **é** tradução do mesmo texto original — diferente do post curto do LinkedIn, que tem 3 versões nativas não-traduzidas):

```
<!-- NARRATIVA -->
[conteúdo completo em português]

<!-- NARRATIVA_EN -->
[conteúdo completo em inglês]

<!-- NARRATIVA_IT -->
[conteúdo completo em italiano]
```

## Tags — reutilizar antes de criar novas

O blog exibe a contagem de posts por tag; tags com mais posts ganham mais destaque na navegação. Lista atual:

`Arquitetura`, `Auth`, `Boas Práticas`, `Clean Architecture`, `Design de Sistema`, `Docker`, `Frontend`, `Full Stack`, `Home Server`, `i18n`, `Infraestrutura`, `Java`, `Kafka`, `Markdown`, `Microservices`, `Open Finance`, `OFX`, `Portfólio`, `React`, `Segurança`, `Spring Boot`, `Testes`, `Vite`

## Regras adicionais

- Não mencionar projetos ainda não divulgados publicamente — usar termos genéricos como "um projeto em desenvolvimento"
- Tempo de leitura é calculado automaticamente a partir do conteúdo (~200 palavras/min) — não informar manualmente
- Cadência ainda não formalizada especificamente para o blog do site — hoje segue o ritmo de publicação do LinkedIn (skill `/new-post`, 8h de intervalo entre versões de idioma). Trajetória e blog ficaram parados ~4 meses (última entrada: abril/2026 na trajetória, 16/05/2026 no blog) — retomar cadência é item da Fase B do retrofit do portfólio

## Trajetória — formato enxuto (decisão de 10/09/2026)

O formato antigo pedia dois textos completos por entrada (narrativo + técnico), duplicados em PT/EN — 4 blocos de prosa por marco, com um toggle na página (`ModeToggle`) pra alternar entre os dois. Custo de manutenção alto: foi um dos motivos da trajetória ficar 4 meses sem atualização.

**Mudança:** uma entrada agora tem **um texto só** por idioma — nem puramente narrativo, nem puramente técnico, uma versão intermediária que carrega os dois ao mesmo tempo: conta o contexto/decisão (por que isso aconteceu, o que estava em jogo) **e** entrega substância técnica concreta (stack, decisão de arquitetura, número real) no mesmo parágrafo, sem separar em seções.

- **Marcador no `.md`:** só `<!-- NARRATIVA -->` e `<!-- NARRATIVA_EN -->` — não escrever mais `<!-- TECNICO -->`/`<!-- TECNICO_EN -->` em entradas novas
- **Componente:** `TimelineEntry` não recebe mais `mode` — sempre renderiza `entry.narrativa`/`entry.narrativa_en`. O toggle (`ModeToggle`) foi removido do código (`src/components/Timeline/`, `Trajetoria.jsx`), assim como as chaves `trajetoria.toggle.*` do i18n
- **Tags:** antes só apareciam no modo técnico — agora aparecem sempre, já que não existe mais modo
- **Entradas antigas (as 20 ativas hoje):** não precisam ser reescritas — o parser ignora blocos `TECNICO`/`TECNICO_EN` que ainda existirem no arquivo (viram dado morto, sem efeito visual), e o campo `narrativa` de cada uma já é prosa que se sustenta sozinha. Só entradas novas seguem o formato enxuto por padrão

**Como calibrar o meio-termo:** nem a extensão de um post de blog, nem uma lista seca de tecnologias — uma cena curta (2-4 parágrafos) com uma frase de contexto, uma frase de decisão técnica real e, quando fizer sentido, um número concreto (ex: "troquei Kafka por Redis Streams porque o volume do projeto não justificava a complexidade operacional" já é o tom certo — contexto + decisão + porquê, sem separar em seção "técnica" à parte).
