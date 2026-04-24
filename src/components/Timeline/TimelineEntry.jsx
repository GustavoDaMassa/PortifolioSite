import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import styles from './TimelineEntry.module.css';

export const TimelineEntry = ({ entry, mode }) => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language.startsWith('en');
  const isMarco = entry.type === 'marco';

  const title = isEn && entry.title_en ? entry.title_en : entry.title;
  const subtitle = isEn && entry.subtitle_en ? entry.subtitle_en : entry.subtitle;
  const content = mode === 'tecnico'
    ? (isEn && entry.tecnico_en ? entry.tecnico_en : entry.tecnico)
    : (isEn && entry.narrativa_en ? entry.narrativa_en : entry.narrativa);

  function formatDate(dateStr) {
    if (!dateStr) return '';
    const [year, month] = dateStr.split('-');
    if (!month) return year;
    const months = t('trajetoria.months', { returnObjects: true });
    return `${months[parseInt(month, 10) - 1]}/${year}`;
  }

  return (
    <div className={`${styles.wrapper} ${isMarco ? styles.marco : ''}`}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.date}>
              {formatDate(entry.date)}
              {entry.dateEnd ? ` → ${formatDate(entry.dateEnd)}` : ''}
            </span>
            <span className={`${styles.typeBadge} ${styles[entry.type]}`}>
              {t(`trajetoria.types.${entry.type}`, entry.type)}
            </span>
          </div>
          <h3 className={styles.title}>{title}</h3>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        <div className={styles.content}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        {mode === 'tecnico' && entry.tags?.length > 0 && (
          <div className={styles.tags}>
            {entry.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}

        {entry.github && (
          <a
            href={entry.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            {t('trajetoria.viewGithub')} →
          </a>
        )}
      </div>
    </div>
  );
};
