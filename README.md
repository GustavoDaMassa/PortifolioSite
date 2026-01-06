# Portfolio Gustavo Henrique | Desenvolvedor Backend

> Portfolio profissional desenvolvido com React + Vite para apresentar projetos, habilidades técnicas e experiências como desenvolvedor backend.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Arquitetura](#arquitetura)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Execução](#execução)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Rotas](#rotas)
- [Componentes Principais](#componentes-principais)
- [Internacionalização](#internacionalização)
- [Gerenciamento de Temas](#gerenciamento-de-temas)
- [Deploy](#deploy)
- [Desenvolvimento](#desenvolvimento)
- [Contato](#contato)

## Sobre o Projeto

Portfolio pessoal desenvolvido para apresentar de forma profissional e interativa os principais projetos e habilidades técnicas adquiridas ao longo da carreira como desenvolvedor backend. O site oferece uma experiência moderna e responsiva, com suporte a múltiplos idiomas e temas claro/escuro.

A aplicação foi construída seguindo boas práticas de desenvolvimento front-end, utilizando React 19, componentes modulares, CSS Modules para estilos isolados, e React Router para navegação SPA (Single Page Application).

## Funcionalidades

- **Página Principal (Home)**: Apresentação pessoal, stack de tecnologias e destaques de projetos
- **Portfólio de Projetos**: Galeria completa de projetos desenvolvidos com cards interativos
- **Páginas de Detalhes**: Apresentação detalhada de projetos específicos (MediasAPI e FinanceAPI)
- **Internacionalização (i18n)**: Suporte a português (PT-BR) e inglês (EN)
- **Tema Claro/Escuro**: Alternância entre temas com persistência em localStorage
- **Navegação Responsiva**: Menu hambúrguer para dispositivos móveis e navegação superior para desktop
- **Seletor de Idioma**: Componente dedicado para troca de idioma em tempo real
- **Download de Currículo**: Currículos bilíngues disponíveis para download (PDF)
- **Indicador de Página Ativa**: Barra visual indicando a rota atual na navegação
- **Layout Responsivo**: Design adaptável para desktop, tablet e mobile

## Tecnologias

### Core

- **[React](https://react.dev/)** `^19.2.0` - Biblioteca JavaScript para construção de interfaces
- **[React DOM](https://react.dev/)** `^19.2.0` - Pacote para renderização React no DOM
- **[Vite](https://vite.dev/)** `^7.2.4` - Build tool e dev server de alta performance

### Roteamento

- **[React Router DOM](https://reactrouter.com/)** `^7.9.6` - Roteamento declarativo para React

### Internacionalização

- **[i18next](https://www.i18next.com/)** `^25.6.3` - Framework de internacionalização
- **[react-i18next](https://react.i18next.com/)** `^16.3.5` - Integração i18next com React

### Ferramentas de Desenvolvimento

- **[ESLint](https://eslint.org/)** `^9.39.1` - Linter para JavaScript/React
- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)** `^5.1.1` - Plugin oficial Vite para React
- **[TypeScript Types]()** - Tipagens para React (`@types/react`, `@types/react-dom`)

### Estilização

- **CSS Modules** - Estilos escopados por componente
- **CSS Custom Properties** - Variáveis CSS para temas e cores

## Arquitetura

O projeto segue uma arquitetura modular baseada em componentes, com separação clara de responsabilidades:

```
┌─────────────────────────────────────────┐
│            Application Layer            │
│  (App.jsx - Routing & Theme Provider)   │
└─────────────────────────────────────────┘
                    │
        ┌───────────┴───────────┐
        │                       │
┌───────▼────────┐    ┌────────▼─────────┐
│  Pages Layer   │    │  Context Layer   │
│  (Home, etc)   │    │  (ThemeContext)  │
└───────┬────────┘    └──────────────────┘
        │
┌───────▼────────────────────────────────┐
│         Components Layer               │
│  (Layout, Navigation, Cards, etc)      │
└────────────────────────────────────────┘
        │
┌───────▼────────────────────────────────┐
│          Data Layer                    │
│  (projects.js, technologies.js, etc)   │
└────────────────────────────────────────┘
```

### Princípios Aplicados

- **Component-Based Architecture**: Componentes reutilizáveis e modulares
- **Separation of Concerns**: Separação entre lógica, apresentação e dados
- **CSS Modules**: Isolamento de estilos por componente
- **Context API**: Gerenciamento de estado global (tema)
- **Single Responsibility**: Cada componente com responsabilidade única
- **DRY (Don't Repeat Yourself)**: Reutilização de código através de componentes

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 ou **yarn** >= 1.22.0

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/GustavoDaMassa/PortifolioSite.git
cd PortifolioSite
```

2. Instale as dependências:

```bash
npm install
```

ou

```bash
yarn install
```

## Execução

### Ambiente de Desenvolvimento

Inicie o servidor de desenvolvimento com hot-reload:

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

### Build de Produção

Crie uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados no diretório `dist/`

### Preview do Build

Visualize a versão de produção localmente:

```bash
npm run preview
```

## Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento (Vite) |
| `npm run build` | Cria build de produção otimizado |
| `npm run preview` | Visualiza build de produção localmente |
| `npm run lint` | Executa ESLint para análise estática de código |

## Estrutura do Projeto

```
/
├── public/                          # Arquivos estáticos públicos
│   └── assets/
│       ├── images/                  # Imagens do projeto
│       │   ├── icons/               # Ícones de tecnologias
│       │   ├── *.png                # Imagens de cards e projetos
│       │   └── *.jpg
│       └── pdf/                     # Currículos em PDF
│           ├── Curriculo-PT.pdf
│           └── Resume-EN.pdf
│
├── src/
│   ├── components/                  # Componentes reutilizáveis
│   │   ├── Layout/                  # Container principal da aplicação
│   │   │   ├── Layout.jsx
│   │   │   └── Layout.module.css
│   │   ├── Navigation/              # Navegação superior e setas
│   │   │   ├── TopNav.jsx
│   │   │   ├── NavArrows.jsx
│   │   │   └── Navigation.module.css
│   │   ├── SideMenu/                # Menu hambúrguer mobile
│   │   │   ├── SideMenu.jsx
│   │   │   └── SideMenu.module.css
│   │   ├── ProfileSection/          # Seção de apresentação pessoal
│   │   │   ├── ProfileSection.jsx
│   │   │   └── ProfileSection.module.css
│   │   ├── TechStack/               # Grid de tecnologias
│   │   │   ├── TechStack.jsx
│   │   │   └── TechStack.module.css
│   │   ├── ProjectCard/             # Card de projeto individual
│   │   │   ├── ProjectCard.jsx
│   │   │   └── ProjectCard.module.css
│   │   ├── VideoPlayer/             # Player de vídeo
│   │   │   ├── VideoPlayer.jsx
│   │   │   └── VideoPlayer.module.css
│   │   ├── ThemeToggle/             # Botão de alternância de tema
│   │   │   ├── ThemeToggle.jsx
│   │   │   └── ThemeToggle.module.css
│   │   └── LanguageSelector/        # Seletor de idioma
│   │       ├── LanguageSelector.jsx
│   │       └── LanguageSelector.module.css
│   │
│   ├── pages/                       # Páginas da aplicação
│   │   ├── Home/                    # Página principal
│   │   │   ├── Home.jsx
│   │   │   └── Home.module.css
│   │   ├── AllProjects/             # Galeria de todos os projetos
│   │   │   ├── AllProjects.jsx
│   │   │   └── AllProjects.module.css
│   │   ├── MediasAPI/               # Detalhes do projeto MediasAPI
│   │   │   ├── MediasAPI.jsx
│   │   │   └── MediasAPI.module.css
│   │   └── FinanceAPI/              # Detalhes do projeto FinanceAPI
│   │       ├── FinanceAPI.jsx
│   │       └── FinanceAPI.module.css
│   │
│   ├── context/                     # Context API para estado global
│   │   └── ThemeContext.jsx         # Gerenciamento de tema
│   │
│   ├── data/                        # Dados estáticos da aplicação
│   │   ├── projects.js              # Lista de projetos
│   │   ├── technologies.js          # Lista de tecnologias
│   │   └── socialLinks.js           # Links de redes sociais
│   │
│   ├── hooks/                       # Custom hooks
│   │   └── useSwipe.js              # Hook para navegação touch/swipe
│   │
│   ├── i18n/                        # Configuração de internacionalização
│   │   ├── config.js                # Configuração i18next
│   │   └── locales/                 # Arquivos de tradução
│   │       ├── pt.json              # Português (Brasil)
│   │       └── en.json              # Inglês
│   │
│   ├── styles/                      # Estilos globais
│   │   └── global.css               # Variáveis CSS e estilos base
│   │
│   ├── utils/                       # Funções utilitárias
│   │   └── paths.js                 # Helper para caminhos de assets
│   │
│   ├── App.jsx                      # Componente raiz
│   ├── App.css                      # Estilos do App
│   ├── main.jsx                     # Entry point da aplicação
│   └── index.css                    # Reset CSS
│
├── .eslintrc.cjs                    # Configuração ESLint
├── vite.config.js                   # Configuração Vite
├── package.json                     # Dependências e scripts
├── index.html                       # HTML template
└── README.md                        # Documentação
```

## Rotas

A aplicação utiliza React Router DOM para navegação SPA:

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | `Home` | Página principal com apresentação, stack e projetos em destaque |
| `/medias` | `MediasAPI` | Detalhes do projeto MediasAPI (Gestão de Notas Acadêmicas) |
| `/finance` | `FinanceAPI` | Detalhes do projeto FinanceAPI (Integração Bancária GraphQL) |
| `/projetos` | `AllProjects` | Galeria com todos os projetos desenvolvidos |

**Base Path**: `/PortifolioSite/` (configurado para GitHub Pages)

## Componentes Principais

### Layout

Componente wrapper principal que envolve todas as páginas, fornecendo estrutura consistente.

**Localização**: `src/components/Layout/Layout.jsx`

### TopNav

Barra de navegação superior fixa com links para todas as páginas, indicador de página ativa, seletor de idioma e toggle de tema.

**Localização**: `src/components/Navigation/TopNav.jsx`

**Funcionalidades**:
- Navegação entre páginas
- Indicador visual da página ativa (sublinhado + cor)
- Responsivo (esconde em mobile, mostra menu hambúrguer)

### SideMenu

Menu lateral hambúrguer para navegação mobile.

**Localização**: `src/components/SideMenu/SideMenu.jsx`

**Funcionalidades**:
- Abertura/fechamento com animação
- Links de navegação
- Ícones sociais (GitHub, LinkedIn)
- Toggle de tema
- Seletor de idioma

### ProfileSection

Seção de apresentação pessoal com foto, descrição e botão de download de currículo.

**Localização**: `src/components/ProfileSection/ProfileSection.jsx`

**Funcionalidades**:
- Download de currículo bilíngue (PT/EN)
- Seleção automática do currículo baseado no idioma atual

### TechStack

Grid de ícones de tecnologias com efeito hover.

**Localização**: `src/components/TechStack/TechStack.jsx`

**Dados**: Importados de `src/data/technologies.js`

### ProjectCard

Card de projeto individual com imagem, título, descrição e links.

**Localização**: `src/components/ProjectCard/ProjectCard.jsx`

**Props**:
- `project`: Objeto com dados do projeto
- Efeitos hover e transições suaves

### ThemeToggle

Botão para alternar entre tema claro e escuro.

**Localização**: `src/components/ThemeToggle/ThemeToggle.jsx`

**Funcionalidades**:
- Ícone dinâmico (sol/lua)
- Persistência do tema em localStorage

### LanguageSelector

Seletor de idioma (PT-BR / EN).

**Localização**: `src/components/LanguageSelector/LanguageSelector.jsx`

**Funcionalidades**:
- Alternância entre português e inglês
- Atualização imediata do conteúdo

## Internacionalização

O projeto utiliza **i18next** e **react-i18next** para suporte multilíngue.

### Configuração

**Arquivo**: `src/i18n/config.js`

```javascript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './locales/pt.json';
import en from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en }
    },
    lng: 'pt',              // Idioma padrão
    fallbackLng: 'pt',      // Idioma fallback
    interpolation: {
      escapeValue: false
    }
  });
```

### Idiomas Suportados

- **Português (Brasil)**: `pt` (padrão)
- **Inglês**: `en`

### Arquivos de Tradução

- `src/i18n/locales/pt.json`: Traduções em português
- `src/i18n/locales/en.json`: Traduções em inglês

### Uso em Componentes

```jsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();

  return (
    <h1>{t('home.title')}</h1>
  );
}
```

### Troca de Idioma

```jsx
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
}
```

## Gerenciamento de Temas

O sistema de temas é implementado usando **Context API** do React.

### ThemeContext

**Localização**: `src/context/ThemeContext.jsx`

**Funcionalidades**:
- Estado global do tema (light/dark)
- Persistência em localStorage
- Função `toggleTheme()` para alternância

### Uso do ThemeContext

```jsx
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

### Temas Disponíveis

- **Dark** (padrão): Fundo preto (#000000), texto claro
- **Light**: Fundo claro, texto escuro

### Variáveis CSS

**Arquivo**: `src/styles/global.css`

```css
[data-theme="dark"] {
  --bg-primary: #000000;
  --text-primary: #ffffff;
  /* ... */
}

[data-theme="light"] {
  --bg-primary: #ffffff;
  --text-primary: #000000;
  /* ... */
}
```

## Deploy

O projeto está configurado para deploy no **GitHub Pages**.

### Configuração Vite

**Arquivo**: `vite.config.js`

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/PortifolioSite/',  // Base path para GitHub Pages
})
```

### Configuração Router

**Arquivo**: `src/App.jsx`

```jsx
<Router basename="/PortifolioSite">
  {/* Rotas */}
</Router>
```

### Build para Produção

```bash
npm run build
```

O conteúdo do diretório `dist/` deve ser publicado no branch `gh-pages` ou configurado nas Settings do repositório GitHub.

### Utilitário de Caminhos

**Arquivo**: `src/utils/paths.js`

```javascript
export const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL;
  return `${base}${path}`;
};
```

Este utilitário garante que os caminhos de assets funcionem corretamente tanto em desenvolvimento quanto em produção.

## Desenvolvimento

### Estrutura de Componentes

Os componentes seguem a estrutura:

```
ComponentName/
├── ComponentName.jsx        # Lógica do componente
└── ComponentName.module.css # Estilos escopados
```

### CSS Modules

Cada componente possui seus próprios estilos isolados:

```jsx
import styles from './Component.module.css';

function Component() {
  return <div className={styles.container}>...</div>;
}
```

### Boas Práticas Adotadas

- **Componentes Funcionais**: Uso de hooks ao invés de classes
- **PropTypes**: Validação de props (quando necessário)
- **CSS Modules**: Isolamento de estilos
- **Naming Conventions**: PascalCase para componentes, camelCase para funções
- **Code Splitting**: Separação de rotas para otimização
- **Semantic HTML**: Uso de tags semânticas
- **Acessibilidade**: Atributos ARIA onde necessário

### Lint

Execute o linter para verificar qualidade do código:

```bash
npm run lint
```

## Contato

**Gustavo Henrique** - Desenvolvedor Backend

- **GitHub**: [@GustavoDaMassa](https://github.com/GustavoDaMassa)
- **LinkedIn**: [gustavohpereiradev](https://www.linkedin.com/in/gustavohpereiradev/)
- **Portfolio**: [https://gustavodamassa.github.io/PortifolioSite/](https://gustavodamassa.github.io/PortifolioSite/)

---

**Desenvolvido com** ⚛️ React + ⚡ Vite
