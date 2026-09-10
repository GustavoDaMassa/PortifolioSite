import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './PostListItem.module.css';

export const PostListItem = ({ post }) => {
  const { i18n } = useTranslation();
  const isEn = i18n.language.startsWith('en');
  const locale = isEn ? 'en-US' : 'pt-BR';
  const title = isEn && post.title_en ? post.title_en : post.title;

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
    <Link to={`/blog/${post.slug}`} className={styles.row}>
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        {post.tags?.length > 0 && (
          <div className={styles.tags}>
            {post.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>

      <span className={styles.date}>{formatDate(post.date)}</span>
    </Link>
  );
};
