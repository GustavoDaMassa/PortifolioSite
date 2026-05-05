export function getAdjacentPosts(slug, posts) {
  const idx = posts.findIndex(p => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: posts[idx - 1] ?? null,
    next: posts[idx + 1] ?? null,
  };
}
