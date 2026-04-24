import { parseMd } from '../../utils/parseMd';

const modules = import.meta.glob('./*.md', { query: '?raw', import: 'default', eager: true });

export const posts = Object.entries(modules)
  .map(([, raw]) => {
    const { frontmatter, narrativa, tecnico, narrativa_en, tecnico_en } = parseMd(raw);
    // posts de blog não têm marcadores NARRATIVA/TECNICO — usa o body inteiro
    const content = narrativa || tecnico || raw.replace(/^---[\s\S]*?---\r?\n/, '').trim();
    const content_en = narrativa_en || tecnico_en || '';
    return { ...frontmatter, content, content_en };
  })
  .sort((a, b) => (b.date > a.date ? 1 : -1));

export function getPost(slug) {
  return posts.find(p => p.slug === slug) ?? null;
}

export function getAllTags() {
  const set = new Set();
  posts.forEach(p => p.tags?.forEach(t => set.add(t)));
  return [...set].sort();
}
