import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './ParallelTabs.module.css';

export const ParallelTabs = ({ children, mode }) => {
  const [active, setActive] = useState(0);
  const entry = children[active];
  const content = mode === 'tecnico' ? entry.tecnico : entry.narrativa;

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {children.map((child, i) => (
          <button
            key={child.id}
            className={`${styles.tab} ${i === active ? styles.active : ''}`}
            onClick={() => setActive(i)}
          >
            {child.title}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        <ReactMarkdown>{content}</ReactMarkdown>
        {mode === 'tecnico' && entry.tags?.length > 0 && (
          <div className={styles.tags}>
            {entry.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
