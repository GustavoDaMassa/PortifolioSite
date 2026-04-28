---
slug: "portfolio-trajetoria-blog"
title: "Portfólio além do GitHub: trajetória visual, blog técnico e uma estratégia de conteúdo"
title_en: "Portfolio beyond GitHub: visual timeline, technical blog and a content strategy"
date: "2026-04-28"
tags: ["React", "Vite", "Markdown", "i18n", "Portfólio"]
excerpt: "Como estruturei um sistema de conteúdo público com trajetória em linha do tempo e blog técnico, usando o LinkedIn como entrada e o blog como profundidade para quem quiser ir além."
excerpt_en: "How I built a public content system with a visual timeline and technical blog, using LinkedIn as the entry point and the blog as depth for those who want to go further."
---

<!-- NARRATIVA -->
GitHub é um bom lugar para guardar código. Não é um bom lugar para contar uma história.

Repositórios mostram *o que* foi feito. Não mostram *por que*, não mostram a sequência, não mostram o raciocínio por trás das decisões. Para quem está se posicionando no mercado, isso é uma lacuna — e foi exatamente ela que me motivou a construir dois módulos novos no meu portfólio: a **Trajetória** e o **Blog**.

---

## A estratégia de conteúdo

A ideia central é simples: o LinkedIn é a entrada, o blog é a profundidade.

Posts no LinkedIn tendem a ser curtos por necessidade. Quem lê quer o gancho, não o tutorial completo. Mas existe uma parcela — recrutadores técnicos, devs curiosos, pessoas avaliando fit — que quer mais. Para essas pessoas, o post no LinkedIn vira um convite para continuar a leitura no blog, onde os detalhes técnicos reais estão documentados.

Isso cria uma separação clara de responsabilidades no conteúdo: o LinkedIn atrai, o blog retém e prova.

---

## Trajetória — a timeline da jornada

A Trajetória é uma linha do tempo de tudo que construí e estudei desde o início. Cada entrada é um arquivo Markdown com frontmatter YAML:

```md
---
id: "financeapi"
date: "2024-03"
title: "FinanceAPI"
type: "marco"
tags: ["Java", "Spring Boot", "PostgreSQL"]
parallel: ["outro-projeto"]
github: "https://github.com/..."
---

<!-- NARRATIVA -->
Texto em prosa sobre o contexto e motivação.

<!-- TECNICO -->
Detalhes de arquitetura, decisões e trade-offs.
```

Cada entrada pode ter dois modos de leitura: **narrativo** (prosa, contexto, por que foi feito) e **técnico** (arquitetura, decisões, trade-offs). O usuário alterna entre eles com um toggle, e a preferência fica salva no `localStorage`.

No componente, as entradas são agrupadas por trimestre usando uma função simples sobre a data de cada entry:

```js
function getPeriodKey(dateStr, t) {
  const [year, month] = dateStr.split('-');
  const q = Math.ceil(parseInt(month, 10) / 3);
  return `${year} · ${t('trajetoria.quarter', { count: q })}`;
}
```

Isso dá uma granularidade melhor do que agrupar por ano, sem sobrecarregar visualmente.

---

## Blog — posts técnicos com estrutura dupla

O Blog segue a mesma lógica de conteúdo: cada post é um Markdown com frontmatter e seções marcadas por comentários HTML. A separação narrativa/técnica existe aqui também, mas para posts do blog o corpo inteiro é tratado como conteúdo único se não houver marcadores.

O carregamento dos posts usa `import.meta.glob` do Vite, que resolve todos os arquivos `.md` do diretório em tempo de build:

```js
const modules = import.meta.glob('./*.md', { query: '?raw', import: 'default', eager: true });
```

Com `eager: true`, todos os arquivos são importados de forma síncrona no bundle — sem lazy loading, sem requisição em runtime. Os posts existem como strings no bundle, prontos para serem parseados.

O parser de frontmatter é custom, sem dependência externa:

```js
function parseYaml(yaml) {
  const result = {};
  for (const line of yaml.split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const raw = line.slice(colonIdx + 1).trim();
    if (raw.startsWith('[')) {
      result[key] = inner.split(',').map(v => v.trim()).filter(Boolean);
    } else {
      result[key] = raw.replace(/^["']|["']$/g, '');
    }
  }
  return result;
}
```

A decisão de não usar `gray-matter` ou similares foi intencional: o parser precisa de exatamente o que o projeto usa. Mais dependência, mais surface area de problema.

---

## i18n

Tanto o Blog quanto a Trajetória suportam português e inglês via `react-i18next`. As strings fixas da UI são chaves de tradução. O conteúdo dos posts e entries tem versões `_en` embutidas no próprio Markdown, extraídas pelo parser.

Isso mantém tudo em um único arquivo por post — sem duplicar arquivos por idioma, sem sincronizar manualmente.

---

## Decisões e trade-offs

**Sem CMS, sem banco de dados.** Todo o conteúdo vive em arquivos Markdown versionados no git. Adicionar um post é abrir um arquivo, escrever e fazer commit. Nenhuma interface de admin, nenhum token de API, nenhuma dependência externa de conteúdo.

**Build estático.** O `import.meta.glob` com `eager: true` significa que os posts fazem parte do bundle. Em um blog de escala isso seria inviável — aqui, com dezenas de posts, é razoável e elimina qualquer necessidade de servidor para conteúdo.

**Modo narrativo/técnico.** A mesma entrada pode ser lida por um recrutador não técnico (narrativa) ou por um dev avaliando decisões de arquitetura (técnico). Isso evita a dicotomia comum de "portfolio para RH" vs "portfolio para devs".

---

Esse sistema ainda está evoluindo. A próxima etapa é exatamente essa: usar cada post do blog como referência nos posts do LinkedIn, criando um fluxo consistente entre o que aparece na rede e o que está documentado aqui.

Esse post é o primeiro exemplo disso. Se você chegou até aqui, é porque o filtro funcionou.

<!-- NARRATIVA_EN -->
GitHub is a good place to store code. It is not a good place to tell a story.

Repositories show *what* was done. They do not show *why*, they do not show the sequence, they do not show the reasoning behind decisions. For someone positioning themselves in the job market, that is a real gap — and it was exactly that gap that motivated me to build two new modules in my portfolio: the **Trajetória** (Timeline) and the **Blog**.

---

## The content strategy

The core idea is simple: LinkedIn is the entry point, the blog is the depth.

LinkedIn posts tend to be short by necessity. Readers want the hook, not the full tutorial. But there is a subset — technical recruiters, curious devs, people evaluating fit — who want more. For those people, the LinkedIn post becomes an invitation to keep reading on the blog, where the real technical decisions are documented.

This creates a clear separation of responsibilities in content: LinkedIn attracts, the blog retains and proves.

---

## Trajetória — the journey timeline

Trajetória is a timeline of everything I have built and studied from the beginning. Each entry is a Markdown file with YAML frontmatter. Each entry supports two reading modes: **narrative** (prose, context, why it was done) and **technical** (architecture, decisions, trade-offs). The user switches between them with a toggle, and the preference is saved in `localStorage`.

Entries are grouped by quarter, giving better granularity than grouping by year without visual overhead.

---

## Blog — technical posts with dual structure

The Blog follows the same content logic: each post is a Markdown file with frontmatter and sections marked by HTML comments. Posts are loaded using Vite's `import.meta.glob` with `eager: true`, which means all files are imported synchronously into the bundle at build time — no lazy loading, no runtime requests.

The frontmatter parser is custom, with no external dependency. The decision not to use `gray-matter` was intentional: the parser needs exactly what the project uses. More dependency, more surface area for problems.

---

## Decisions and trade-offs

**No CMS, no database.** All content lives in Markdown files versioned in git. Adding a post is opening a file, writing, and committing. No admin interface, no API tokens, no external content dependency.

**Static build.** With `eager: true`, posts are part of the bundle. At scale this would be unviable — here, with dozens of posts, it is reasonable and eliminates any need for a content server.

**Narrative/technical mode.** The same entry can be read by a non-technical recruiter (narrative) or by a dev evaluating architecture decisions (technical). This avoids the common dichotomy of "portfolio for HR" vs "portfolio for devs".

---

This system is still evolving. The next step is exactly this: using each blog post as a reference in LinkedIn posts, creating a consistent flow between what appears on the network and what is documented here.

This post is the first example of that. If you made it this far, the filter worked.
