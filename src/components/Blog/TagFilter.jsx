import styles from './TagFilter.module.css';

export const TagFilter = ({ tags, active, onChange }) => (
  <div className={styles.wrapper}>
    <button
      className={`${styles.tag} ${!active ? styles.active : ''}`}
      onClick={() => onChange(null)}
    >
      Todos
    </button>
    {tags.map(tag => (
      <button
        key={tag}
        className={`${styles.tag} ${active === tag ? styles.active : ''}`}
        onClick={() => onChange(tag)}
      >
        {tag}
      </button>
    ))}
  </div>
);
