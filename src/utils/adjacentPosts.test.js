import { describe, it, expect } from 'vitest';
import { getAdjacentPosts } from './adjacentPosts';

const posts = [
  { slug: 'post-a', title: 'Post A' },
  { slug: 'post-b', title: 'Post B' },
  { slug: 'post-c', title: 'Post C' },
];

describe('getAdjacentPosts', () => {
  it('returns next post for first item', () => {
    const { prev, next } = getAdjacentPosts('post-a', posts);
    expect(prev).toBeNull();
    expect(next).toEqual(posts[1]);
  });

  it('returns prev post for last item', () => {
    const { prev, next } = getAdjacentPosts('post-c', posts);
    expect(prev).toEqual(posts[1]);
    expect(next).toBeNull();
  });

  it('returns both for middle item', () => {
    const { prev, next } = getAdjacentPosts('post-b', posts);
    expect(prev).toEqual(posts[0]);
    expect(next).toEqual(posts[2]);
  });

  it('returns nulls for unknown slug', () => {
    const { prev, next } = getAdjacentPosts('unknown', posts);
    expect(prev).toBeNull();
    expect(next).toBeNull();
  });

  it('handles single post array', () => {
    const { prev, next } = getAdjacentPosts('post-a', [posts[0]]);
    expect(prev).toBeNull();
    expect(next).toBeNull();
  });
});
