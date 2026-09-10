import { useEffect, useRef } from 'react';

export const useSwipe = (onSwipeLeft, onSwipeRight, threshold = 50, targetRef) => {
  const startX = useRef(0);
  const endX = useRef(0);

  useEffect(() => {
    const target = targetRef?.current ?? document;

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

    target.addEventListener('touchstart', handleTouchStart);
    target.addEventListener('touchmove', handleTouchMove);
    target.addEventListener('touchend', handleTouchEnd);

    return () => {
      target.removeEventListener('touchstart', handleTouchStart);
      target.removeEventListener('touchmove', handleTouchMove);
      target.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, threshold, targetRef]);
};
