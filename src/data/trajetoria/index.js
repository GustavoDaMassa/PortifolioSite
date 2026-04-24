import { parseMd } from '../../utils/parseMd';

const ORDERED_FILES = [
  './01-fundacoes-c.md',
  './02-java-poo.md',
  './03-projetos-equipe.md',
  './04-ecossistema-spring.md',
  './05-agenda-todo.md',
  './06-simplified-wallet.md',
  './07-codi-nome-uol.md',
  './08-html-css-javascript.md',
  './09-mediasapi.md',
  './10-portfolio-react.md',
  './11-financeapi.md',
  './12-cross-stack.md',
  './13-producao-infra.md',
  './14-mediassite.md',
  './15-financesite.md',
  './16-refatoracao.md',
  './17-classview.md',
  './18-microservicos.md',
  './19-momento-atual.md',
];

const modules = import.meta.glob('./*.md', { query: '?raw', import: 'default', eager: true });

export const entries = ORDERED_FILES
  .map((path) => {
    const raw = modules[path];
    const filename = path.replace('./', '').replace('.md', '');
    const { frontmatter, narrativa, tecnico, narrativa_en, tecnico_en } = parseMd(raw);
    return { filename, narrativa, tecnico, narrativa_en, tecnico_en, ...frontmatter };
  });
