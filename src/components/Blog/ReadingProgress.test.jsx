import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, act } from '@testing-library/react';
import { ReadingProgress } from './ReadingProgress';

describe('ReadingProgress', () => {
  let addEventListenerSpy;
  let removeEventListenerSpy;

  beforeEach(() => {
    addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the progress bar element', () => {
    const { container } = render(<ReadingProgress />);
    const bar = container.querySelector('[role="progressbar"]');
    expect(bar).toBeTruthy();
  });

  it('registers a scroll event listener on mount', () => {
    render(<ReadingProgress />);
    const scrollListeners = addEventListenerSpy.mock.calls.filter(
      ([event]) => event === 'scroll'
    );
    expect(scrollListeners.length).toBeGreaterThan(0);
  });

  it('removes the scroll event listener on unmount', () => {
    const { unmount } = render(<ReadingProgress />);
    unmount();
    const removedScrollListeners = removeEventListenerSpy.mock.calls.filter(
      ([event]) => event === 'scroll'
    );
    expect(removedScrollListeners.length).toBeGreaterThan(0);
  });

  it('starts with 0% progress', () => {
    const { container } = render(<ReadingProgress />);
    const bar = container.querySelector('[role="progressbar"]');
    expect(bar.style.width).toBe('0%');
  });

  it('updates width on scroll', () => {
    Object.defineProperty(document.documentElement, 'scrollTop', {
      writable: true, value: 500,
    });
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      writable: true, value: 2000,
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      writable: true, value: 800,
    });

    const { container } = render(<ReadingProgress />);

    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    const bar = container.querySelector('[role="progressbar"]');
    const width = parseFloat(bar.style.width);
    expect(width).toBeGreaterThan(0);
    expect(width).toBeLessThanOrEqual(100);
  });
});
