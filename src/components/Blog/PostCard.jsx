import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './PostCard.module.css';

export const PostCard = ({ post }) => {
  const { t } = useTranslation();

  function formatDate(dateStr) {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    const months = t('blog.monthsShort', { returnObjects: true });
    return `${day ? day + ' ' : ''}${months[parseInt(month, 10) - 1]} ${year}`;
  }

  return (
  <Link to={`/blog/${post.slug}`} className={styles.card}>
    <div className={styles.meta}>
      <span className={styles.date}>{formatDate(post.date)}</span>
    </div>
    <h2 className={styles.title}>{post.title}</h2>
    {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
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
