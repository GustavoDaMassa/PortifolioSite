import { parseMd } from '../../utils/parseMd';

const modules = import.meta.glob('./*.md', { query: '?raw', import: 'default', eager: true });

export const entries = Object.entries(modules)
  .map(([path, raw]) => {
    const filename = path.replace('./', '').replace('.md', '');
    const { frontmatter, narrativa, tecnico } = parseMd(raw);
    return { filename, narrativa, tecnico, ...frontmatter };
  })
  .sort((a, b) => a.filename.localeCompare(b.filename));
