const WORDS_PER_MINUTE = 200;

export function readingTime(text) {
  const stripped = text.replace(/[#*`\[\]()_~>]/g, '').replace(/https?:\/\/\S+/g, '');
  const words = stripped.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}
