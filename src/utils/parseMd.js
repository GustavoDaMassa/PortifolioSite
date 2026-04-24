function parseYaml(yaml) {
  const result = {};
  for (const line of yaml.split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const raw = line.slice(colonIdx + 1).trim();
    if (raw.startsWith('[')) {
      const inner = raw.slice(1, -1);
      result[key] = inner
        ? inner.split(',').map(v => v.trim().replace(/^["']|["']$/g, '')).filter(Boolean)
        : [];
    } else {
      result[key] = raw.replace(/^["']|["']$/g, '');
    }
  }
  return result;
}

export function parseMd(raw) {
  const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!fmMatch) return { frontmatter: {}, narrativa: raw, tecnico: '' };

  const frontmatter = parseYaml(fmMatch[1]);
  const body = fmMatch[2];

  const narrativaMatch = body.match(/<!-- NARRATIVA -->\r?\n([\s\S]*?)(?=<!-- TECNICO -->|$)/);
  const tecnicoMatch = body.match(/<!-- TECNICO -->\r?\n([\s\S]*)$/);

  return {
    frontmatter,
    narrativa: narrativaMatch ? narrativaMatch[1].trim() : '',
    tecnico: tecnicoMatch ? tecnicoMatch[1].trim() : '',
  };
}
