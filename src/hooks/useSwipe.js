import { useEffect, useRef } from 'react';

export const useSwipe = (onSwipeLeft, onSwipeRight, threshold = 50) => {
  const startX = useRef(0);
  const endX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    // Touch events (mobile)
    const handleTouchStart = (e) => {
      startX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      endX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const difference = startX.current - endX.current;

      if (Math.abs(difference) > threshold) {
        if (difference > 0) {
          // Swipe left
          onSwipeLeft?.();
        } else {
          // Swipe right
          onSwipeRight?.();
        }
      }

      startX.current = 0;
      endX.current = 0;
    };

    // Mouse events (desktop)
    const handleMouseDown = (e) => {
      // Ignore if clicking on buttons, links, or inputs
      if (e.target.tagName === 'BUTTON' ||
          e.target.tagName === 'A' ||
          e.target.tagName === 'INPUT' ||
          e.target.closest('button') ||
          e.target.closest('a')) {
        return;
      }

      isDragging.current = true;
      startX.current = e.clientX;
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      endX.current = e.clientX;
    };

    const handleMouseUp = () => {
      if (!isDragging.current) return;

      const difference = startX.current - endX.current;

      if (Math.abs(difference) > threshold) {
        if (difference > 0) {
          // Drag left
          onSwipeLeft?.();
        } else {
          // Drag right
          onSwipeRight?.();
        }
      }

      isDragging.current = false;
      startX.current = 0;
      endX.current = 0;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    // Add touch event listeners
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    // Add mouse event listeners
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      // Remove touch event listeners
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);

      // Remove mouse event listeners
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [onSwipeLeft, onSwipeRight, threshold]);
};
