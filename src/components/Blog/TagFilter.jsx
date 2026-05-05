import { useTranslation } from 'react-i18next';
import styles from './TagFilter.module.css';

export const TagFilter = ({ tags, counts = {}, active, onChange }) => {
  const { t } = useTranslation();

  return (
  <div className={styles.wrapper}>
    <button
      className={`${styles.tag} ${!active ? styles.active : ''}`}
      onClick={() => onChange(null)}
    >
      {t('blog.allTags')}
    </button>
    {tags.map(tag => (
      <button
        key={tag}
        className={`${styles.tag} ${active === tag ? styles.active : ''}`}
        onClick={() => onChange(tag)}
      >
        {tag}
        {counts[tag] !== undefined && (
          <span className={styles.count}>{counts[tag]}</span>
        )}
      </button>
    ))}
  </div>
  );
};
