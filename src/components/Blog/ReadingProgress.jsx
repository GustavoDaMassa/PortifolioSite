import { useState, useEffect } from 'react';
import styles from './ReadingProgress.module.css';

export const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollable = scrollHeight - clientHeight;
      if (scrollable <= 0) {
        setProgress(100);
        return;
      }
      setProgress(Math.min(100, Math.round((scrollTop / scrollable) * 100)));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.track}>
      <div
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        className={styles.bar}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
