import { describe, it, expect } from 'vitest';
import { readingTime } from './readingTime';

describe('readingTime', () => {
  it('returns 1 min for short text', () => {
    const text = 'palavra '.repeat(100);
    expect(readingTime(text)).toBe(1);
  });

  it('returns correct minutes for longer text', () => {
    const text = 'palavra '.repeat(400);
    expect(readingTime(text)).toBe(2);
  });

  it('rounds up partial minutes', () => {
    const text = 'palavra '.repeat(250);
    expect(readingTime(text)).toBe(2);
  });

  it('returns 1 for empty string', () => {
    expect(readingTime('')).toBe(1);
  });

  it('ignores markdown syntax in word count', () => {
    const md = '# Título\n\n**bold** text [link](http://example.com) `code`';
    expect(readingTime(md)).toBe(1);
  });
});
