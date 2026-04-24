import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';

function formatDate(dateStr) {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  return `${day ? day + ' ' : ''}${months[parseInt(month, 10) - 1]} ${year}`;
}

export const PostCard = ({ post }) => (
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
