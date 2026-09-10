# Rastreabilidade — Portfólio (gustavodevsite)

Matriz reconstruída por engenharia reversa (Modo Produto, Fase A, 10/09/2026). Atualizar esta tabela ao fechar cada mudança relevante de conteúdo/feature, como orienta a skill de desenvolvimento (`/new-project`, Modo Produto).

**10/09/2026, mais tarde no mesmo dia (Fase B):** redesign grande em uma única sessão — carrossel de destaques (`FeaturedCarousel`), páginas de projeto como overlay (`ProjectShowcase` + `backgroundLocation`), separação de documentação técnica (`*Docs.jsx`) pros 3 projetos que já tinham, páginas próprias pros 4 projetos que só linkavam pro GitHub, blog redesenhado (lista com busca/tag/ordenação, artigo com barra lateral), currículo em estilo "folha" (Google Docs) e seletor de idioma PT/EN/IT (`LanguageGate`). Detalhes por requisito abaixo.

## Requisitos funcionais

| Requisito | Feature | Arquivo(s) de teste | Arquivo(s) de implementação | Status |
|---|---|---|---|---|
| RF01 — Apresentação pessoal | Home/perfil | — | `src/components/ProfileSection/ProfileSection.jsx`, `src/pages/Home/Home.jsx` | Implementado, sem teste |
| RF02 — Grid de tecnologias | TechStack | — | `src/components/TechStack/TechStack.jsx`, `src/data/technologies.js` | Implementado, sem teste |
| RF03 — Projetos em destaque com vídeo | FeaturedCarousel | — | `src/components/FeaturedCarousel/`, `src/data/projects.js` | Implementado, sem teste. Substituiu o hover-preview de vídeo do `ProjectCard` (removido) por um palco único: fundo desfocado com a logo, vídeo de apresentação (ou placeholder "em breve"), descrição, tags e links |
| RF04 — Galeria completa de projetos | AllProjects | — | `src/pages/AllProjects/AllProjects.jsx`, `src/data/projects.js` | Implementado, sem teste. Grade em 4 colunas, sem título de página, com seletor de tags reaproveitado do padrão do Blog e CTA final pro blog/trajetória |
| RF05 — Página de detalhe por projeto | ProjectShowcase (overlay) | — | `src/components/ProjectShowcase/`, `src/pages/{MediasAPI,FinanceAPI,PriceWatch,CaixaFlow,ZapAgenda,DevDraw,SolidyContratos}/` | **Completo** — os 7 projetos featured têm página própria agora (antes só 3). Abre como overlay sobre `/projetos` (`backgroundLocation`, ver `docs/arquitetura.md`), não mais como rota que substitui a página |
| RF05b — Documentação técnica detalhada (subconjunto de RF05) | *Docs pages | — | `src/pages/MediasAPI/MediasDocs.jsx`, `src/pages/FinanceAPI/FinanceDocs.jsx`, `src/pages/PriceWatch/PriceWatchDocs.jsx` | Implementado só pros 3 projetos que já tinham esse conteúdo escrito (apresentação/motivação/funcionalidades/endpoints/práticas). Os outros 4 (CaixaFlow/ZapAgenda/DevDraw/SolidyContratos) não têm — `ProjectShowcase` deles não mostra o link "Documentação" |
| RF06 — Blog técnico (posts, tags, tempo de leitura, navegação) | Blog | `src/utils/tagCounts.test.js`, `src/utils/adjacentPosts.test.js`, `src/utils/readingTime.test.js`, `src/components/Blog/ReadingProgress.test.jsx` | `src/pages/Blog/Blog.jsx`, `src/pages/Blog/BlogPost.jsx`, `src/data/blog/`, `src/utils/parseMd.js` | Implementado, com teste nos utilitários (não nas páginas). Listagem redesenhada: só modo lista (sem cards), busca por texto, seletor de tag (era fileira de pílulas), seletor de ordenação por data. Artigo com barra lateral de navegação (desktop) e texto sem caixa/borda (estilo chat) |
| RF07 — Trajetória (timeline, formato enxuto) | Trajetória | — | `src/pages/Trajetoria/Trajetoria.jsx`, `src/components/Timeline/TimelineEntry.jsx`, `src/data/trajetoria/index.js` | **Parcial** — formato simplificado (sem mais toggle narrativo/técnico); pasta limpa (11 arquivos órfãos removidos, um detalhe recuperado em `13-producao-infra.md`); conteúdo dos últimos ~4 meses ainda não escrito. Única página com `Footer` |
| RF08 — Download de currículo bilíngue | Currículo | — | `src/pages/Curriculo/Curriculo.jsx`, `public/assets/pdf/` | Implementado, sem teste. Redesenhado como uma "folha" no estilo Google Docs (largura fixa, sombra, sempre clara independente do tema do site — ver `docs/arquitetura.md`) |
| RF09 — Tema claro/escuro persistente | Tema | — | `src/context/ThemeContext.jsx`, `src/components/ThemeToggle` | Implementado, sem teste |
| RF10 — Idioma PT/EN/IT persistente | i18n | — | `src/i18n/config.js`, `src/components/LanguageGate/`, `src/components/LanguageSelector` | Implementado, sem teste. Trocou o toggle PT/EN de um clique por um seletor de tela cheia (`LanguageGate`) com os 3 idiomas, reaberto pelo botão de idioma na nav |
| RF11 — Navegação responsiva | Navigation | — | `src/components/Navigation/TopNav.jsx`, `src/components/SideMenu` | Implementado, sem teste |
| RF12 — Links sociais | Social | — | `src/data/socialLinks.js` | Implementado, sem teste |
| RF13 — Título/idioma do documento sincronizados | DocumentI18nSync | — | `src/App.jsx` | Implementado, sem teste |
| RF14 — Transições animadas entre rotas | AnimatedRoutes | — | `src/App.jsx`, Framer Motion | Implementado, sem teste |

## Requisitos não-funcionais

| Requisito | Status |
|---|---|
| RNF01 — SPA 100% estática | Atendido |
| RNF02 — Responsividade mobile-first | Atendido |
| RNF03 — Deploy duplo (Vercel + GitHub Pages) | Atendido — ver `docs/arquitetura.md` |
| RNF04 — i18n de interface PT/EN/IT | Atendido — `LanguageGate` + `it.json` |
| RNF05 — Performance / code-splitting por rota | **Gap** — todas as páginas são import eager em `App.jsx` |
| RNF06 — Conteúdo trilíngue PT/EN/IT | **Gap** — `parseMd.js` não implementa `NARRATIVA_IT`/`TECNICO_IT` |
| RNF07 — Acessibilidade (ARIA, semântica) | Não auditado formalmente |
| RNF08 — Segurança de credenciais de deploy | **Gap crítico**, fora do escopo, pendente de aprovação — ver `MEMORY.md` |
| RNF09 — Cobertura de testes | **Baixa** — 4 arquivos de teste, todos em `src/utils/` (exceto `ReadingProgress.test.jsx`); nenhuma página ou componente de layout tem teste |

## Achados de engenharia reversa (não eram requisito, viraram achado ao ler o código)

| Achado | Detalhe | Ação recomendada |
|---|---|---|
| ~~Conteúdo de trajetória órfão~~ | **Resolvido em 10/09/2026** — os 11 arquivos eram a versão pré-reestruturação da trajetória; todo tópico já tinha entrada ativa correspondente (uma inclusive desdobrada em duas: `09-frontends.md` → `14-mediassite.md` + `15-financesite.md`). Um detalhe concreto (migração AWS → servidor próprio, hardware `i5-3330`/8GB, domínio `financeapi.com.br`) tinha se perdido na reescrita de `13-producao-infra.md` — restaurado antes de apagar os órfãos | — |
| README desatualizado | Descreve deploy só-GitHub-Pages, 4 rotas, sem blog/trajetória/PriceWatch — não reflete o código atual | Reescrever ou substituir por referência a `docs/arquitetura.md`. Fora do escopo desta fase, sinalizado aqui |
| `gray-matter` no `package.json` sem uso aparente | O parser de markdown do projeto é `src/utils/parseMd.js`, próprio, não usa a lib `gray-matter` que está instalada | Confirmar se está em uso em algum lugar não revisado antes de remover |
| Imagem de post hospedada fora do repositório | `2026-05-16-pricewatch-completo.md` usa `raw.githubusercontent.com` em vez de `public/assets/images` | Mover pra asset local. Fase B |
| Sem rota 404 | `Routes` em `App.jsx` não tem `path="*"` | Adicionar página/fallback de rota não encontrada |
| Lint pré-existente | ~~`src/pages/MainFlow/MainFlow.jsx:104` (`react-hooks/rules-of-hooks`)~~ — **resolvido em 10/09/2026**, o arquivo foi removido na Fase B. Resta `src/utils/readingTime.js:4` (`no-useless-escape`) | Fora do escopo da Fase B — mencionado aqui, não corrigido sem aprovação |
