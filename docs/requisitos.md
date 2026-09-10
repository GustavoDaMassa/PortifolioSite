# Requisitos — Portfólio (gustavodevsite)

Documento reconstruído por engenharia reversa do código existente (retrofit para Modo Produto, Fase A, 10/09/2026) — não é um levantamento original feito antes de codar. Reflete o que o sistema faz hoje; achados de inconsistência entre o pretendido e o implementado estão marcados como **gap**.

## Requisitos funcionais

| ID | Requisito | Onde vive hoje |
|----|-----------|----------------|
| RF01 | Apresentação pessoal (foto, texto, stack) na home | `src/components/ProfileSection`, `src/pages/Home` |
| RF02 | Grid de tecnologias dominadas | `src/components/TechStack`, `src/data/technologies.js` |
| RF03 | Vitrine de projetos em destaque, com vídeo embutido (YouTube) quando disponível | `src/data/projects.js` (`featuredProjects`), `src/components/VideoPlayer` |
| RF04 | Galeria completa de todos os projetos (destaque + demais) | `src/pages/AllProjects`, `src/data/projects.js` (`projects`) |
| RF05 | Página de detalhe dedicada para projetos específicos, aberta como overlay (`ProjectShowcase`) sobre a página anterior | `src/components/ProjectShowcase`, `src/pages/{MediasAPI,FinanceAPI,PriceWatch,CaixaFlow,ZapAgenda,DevDraw,SolidyContratos}` — **gap resolvido em 10/09/2026 (Fase B):** os 7 projetos featured agora têm página própria (antes só 3); documentação técnica completa (`*Docs.jsx`) continua restrita aos 3 originais |
| RF06 | Blog técnico com posts em Markdown, tags, tempo de leitura, navegação entre posts adjacentes | `src/pages/Blog`, `src/data/blog/`, `src/utils/parseMd.js`, `src/utils/readingTime.js`, `src/utils/adjacentPosts.js` |
| RF07 | Trajetória — timeline de marcos de carreira em ordem cronológica curada, um texto único por entrada (formato enxuto, decisão de 10/09/2026 — sem mais alternância narrativo/técnico) | `src/pages/Trajetoria`, `src/data/trajetoria/index.js` (lista `ORDERED_FILES` fixa, não é "todo arquivo da pasta"). Contrato de conteúdo em `docs/estilo-editorial.md` |
| RF08 | Download de currículo bilíngue (PT/EN), com seleção automática pelo idioma ativo | `src/components/ProfileSection`, `public/assets/pdf/` |
| RF09 | Alternância de tema claro/escuro, persistida em `localStorage` | `src/context/ThemeContext.jsx`, `src/components/ThemeToggle` |
| RF10 | Seleção de idioma PT/EN/IT via overlay de tela cheia (`LanguageGate`), persistida em `localStorage`, com fallback pro idioma do navegador | `src/i18n/config.js`, `src/components/LanguageGate`, `src/components/LanguageSelector` |
| RF11 | Navegação responsiva — barra superior no desktop, menu hambúrguer no mobile | `src/components/Navigation/TopNav.jsx`, `src/components/SideMenu` |
| RF12 | Links sociais e de contato (GitHub, LinkedIn, WhatsApp, e-mail) | `src/data/socialLinks.js` |
| RF13 | Título da página (`<title>`) e idioma do documento (`<html lang>`) sincronizados com a rota e o idioma ativo | `src/App.jsx` (`DocumentI18nSync`) |
| RF14 | Transições animadas entre páginas, com direção baseada na ordem das rotas | `src/App.jsx` (`AnimatedRoutes`, `PAGE_ORDER`), Framer Motion |

## Requisitos não-funcionais

| ID | Requisito | Situação |
|----|-----------|----------|
| RNF01 | Aplicação 100% estática (sem backend, sem banco de dados) | Atendido — todo o conteúdo é JS/Markdown versionado no próprio repositório |
| RNF02 | Responsividade mobile-first | Atendido — `useSwipe` hook, CSS Modules com breakpoints, `SideMenu` dedicado |
| RNF03 | Disponibilidade via deploy duplo | Vercel (produção, domínio próprio `GustavoHDev.com.br`) + GitHub Actions → GitHub Pages (`base: /PortifolioSite/`, mirror secundário) |
| RNF04 | Internacionalização da interface | **Atendido em 10/09/2026 (Fase B)** — `src/i18n/locales/it.json` adicionado, interface agora PT/EN/IT via `LanguageGate` |
| RNF06 | Conteúdo de blog/trajetória em 3 idiomas (PT/EN/IT) | **Gap real:** `src/utils/parseMd.js` só reconhece os marcadores `NARRATIVA`, `TECNICO`, `NARRATIVA_EN`, `TECNICO_EN` — não existe `NARRATIVA_IT`. A skill `/new-post` e `docs/estilo-editorial.md` já descrevem o contrato trilíngue, mas o parser do site não implementa a leitura do italiano ainda |
| RNF05 | Performance de carregamento | Todas as páginas são importadas de forma eager em `App.jsx` (sem `React.lazy`/code-splitting por rota) — **gap potencial**, não medido com uma auditoria formal (Lighthouse etc.) |
| RNF07 | Acessibilidade básica (ARIA, HTML semântico) | Declarado como prática adotada no README anterior, não auditado formalmente — pendência |
| RNF08 | Segurança das credenciais de deploy | **Gap crítico, fora do escopo desta fase:** tokens de acesso pessoal do GitHub gravados em texto puro nos remotes `site` e `sitedev` em `.git/config` — ver memória `estrategia-conteudo-linkedin-blog`-adjacente / registro em `MEMORY.md`, pendente de aprovação do dev pra correção |
| RNF09 | Cobertura de testes automatizados | Baixa — 4 arquivos de teste (`tagCounts`, `adjacentPosts`, `readingTime`, `ReadingProgress`) para ~15 componentes e 9 páginas. Ver `docs/rastreabilidade.md` |

## Requisitos implícitos

- **Sem autenticação/autorização** — site inteiramente público, não há área logada
- **Sem rota 404 explícita** — `Routes` em `App.jsx` não tem `path="*"`; uma URL inválida hoje renderiza a aplicação em branco dentro do `AnimatePresence`, sem feedback ao usuário (**gap**)
- **Sem logging/analytics identificado no código** — não há integração com ferramenta de analytics (GA, Plausible etc.) nos arquivos revisados; a confirmar com o dev se isso é intencional
- **Conteúdo sensível não publicado** — regra editorial já registrada em `docs/estilo-editorial.md`: não mencionar projetos ainda não divulgados publicamente

## Fora de escopo (confirmado com o dev em 10/09/2026)

- Modo Produto formal (rastreabilidade + diagramas) — **dentro** do escopo, é o que gerou este documento
- Redesign visual/UX — depende de revisão do site rodando localmente com o dev (Fase C do retrofit), não coberto aqui
- Skill de automação recorrente de atualização — desenhada como skill manual (`/portfolio-sync`), ainda não implementada (Fase D)
