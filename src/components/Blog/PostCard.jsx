import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { readingTime } from '../../utils/readingTime';
import styles from './PostCard.module.css';

export const PostCard = ({ post }) => {
  const { i18n } = useTranslation();
  const isEn = i18n.language.startsWith('en');
  const locale = isEn ? 'en-US' : 'pt-BR';

  function formatDate(dateStr) {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-').map(Number);
    return new Intl.DateTimeFormat(locale, {
      day: day ? '2-digit' : undefined,
      month: 'short',
      year: 'numeric',
    }).format(new Date(year, month - 1, day || 1));
  }

  return (
    <Link to={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.date}>{formatDate(post.date)}</span>
        <span className={styles.readingTime}>
          {readingTime(isEn && post.content_en ? post.content_en : post.content)} min
        </span>
      </div>
      <h2 className={styles.title}>{isEn && post.title_en ? post.title_en : post.title}</h2>
      {(isEn && post.excerpt_en ? post.excerpt_en : post.excerpt) && (
        <p className={styles.excerpt}>{isEn && post.excerpt_en ? post.excerpt_en : post.excerpt}</p>
      )}
      {post.tags?.length > 0 && (
        <div className={styles.tags}>
          {post.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      )}
    </Link>
  );
};
