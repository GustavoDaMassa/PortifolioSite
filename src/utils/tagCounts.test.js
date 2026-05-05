import { describe, it, expect } from 'vitest';
import { getTagCounts } from './tagCounts';

const posts = [
  { tags: ['api', 'backend'] },
  { tags: ['api', 'frontend'] },
  { tags: ['backend'] },
  { tags: [] },
  {},
];

describe('getTagCounts', () => {
  it('counts occurrences of each tag', () => {
    const counts = getTagCounts(posts);
    expect(counts.api).toBe(2);
    expect(counts.backend).toBe(2);
    expect(counts.frontend).toBe(1);
  });

  it('returns 0 for unknown tag', () => {
    const counts = getTagCounts(posts);
    expect(counts.unknown).toBeUndefined();
  });

  it('handles posts with no tags gracefully', () => {
    expect(() => getTagCounts(posts)).not.toThrow();
  });

  it('returns empty object for empty array', () => {
    expect(getTagCounts([])).toEqual({});
  });
});
