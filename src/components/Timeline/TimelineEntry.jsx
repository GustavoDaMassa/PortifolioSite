import ReactMarkdown from 'react-markdown';
import styles from './TimelineEntry.module.css';

const TYPE_LABEL = {
  marco: 'Marco',
  projeto: 'Projeto',
  aprendizado: 'Aprendizado',
  infra: 'Infraestrutura',
};

function formatDate(dateStr) {
  if (!dateStr) return '';
  const [year, month] = dateStr.split('-');
  if (!month) return year;
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  return `${months[parseInt(month, 10) - 1]}/${year}`;
}

export const TimelineEntry = ({ entry, mode }) => {
  const isMarco = entry.type === 'marco';
  const content = mode === 'tecnico' ? entry.tecnico : entry.narrativa;

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
              {TYPE_LABEL[entry.type] ?? entry.type}
            </span>
          </div>
          <h3 className={styles.title}>{entry.title}</h3>
          {entry.subtitle && <p className={styles.subtitle}>{entry.subtitle}</p>}
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
            Ver no GitHub →
          </a>
        )}
      </div>
    </div>
  );
};
