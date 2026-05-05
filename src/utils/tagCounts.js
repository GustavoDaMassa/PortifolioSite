export function getTagCounts(posts) {
  return posts.reduce((acc, post) => {
    post.tags?.forEach(tag => {
      acc[tag] = (acc[tag] ?? 0) + 1;
    });
    return acc;
  }, {});
}
