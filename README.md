# Portfólio Gustavo Henrique - React

Portfólio profissional desenvolvido em React para apresentar projetos e habilidades como desenvolvedor backend.

## Tecnologias

- React 18
- React Router DOM
- Vite
- CSS Modules

## Branches

### `main`
Design original com tema escuro minimalista, fonte monospace e bordas brancas.

### `github-theme`
Design inspirado no GitHub Dark Theme com:
- Paleta de cores do GitHub Dark
- Tipografia system fonts
- Cards com hover effects e sombras
- Navegação superior fixa
- Grid layout responsivo
- Bordas e espaçamentos consistentes

## Estrutura do Projeto

```
src/
├── components/
│   ├── Layout/           # Wrapper principal
│   ├── Navigation/       # TopNav e NavArrows
│   ├── SideMenu/         # Menu hambúrguer
│   ├── ProfileSection/   # Seção de apresentação
│   ├── TechStack/        # Grid de tecnologias
│   ├── ProjectCard/      # Card de projeto
│   └── VideoPlayer/      # Player de vídeo
├── pages/
│   ├── Home/            # Página principal
│   ├── MediasAPI/       # Detalhes MediasAPI
│   ├── FinanceAPI/      # Detalhes FinanceAPI
│   └── AllProjects/     # Galeria de projetos
├── data/
│   ├── technologies.js  # Lista de tecnologias
│   ├── projects.js      # Lista de projetos
│   └── socialLinks.js   # Links sociais
└── styles/
    └── global.css       # Estilos globais e variáveis
```

## Rotas

- `/` - Home
- `/medias` - MediasAPI
- `/finance` - FinanceAPI
- `/projetos` - Todos os Projetos

## Como Executar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build
npm run build

# Preview
npm run preview
```

## Commits (GitHub Theme)

1. `add github dark theme colors` - Cores e variáveis CSS
2. `update navigation with github style` - Navegação superior
3. `update profile section styling` - Seção de perfil
4. `update tech stack with grid layout` - Grid de tecnologias
5. `update home page layout` - Layout da home
6. `update project card with hover effects` - Cards de projeto
7. `update all projects page with grid` - Página de projetos
8. `update side menu styling` - Menu lateral
9. `update video player styling` - Player de vídeo
10. `update project detail pages styling` - Páginas de detalhes

## Desenvolvedor

Gustavo Henrique - Desenvolvedor Backend

- [GitHub](https://github.com/GustavoDaMassa)
- [LinkedIn](https://www.linkedin.com/in/gustavohpereiradev/)
