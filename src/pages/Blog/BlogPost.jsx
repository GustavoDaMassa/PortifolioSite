import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { Layout } from '../../components/Layout/Layout';
import { getPost } from '../../data/blog/index';
import styles from './BlogPost.module.css';

export const BlogPost = () => {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPost(slug);

  function formatDate(dateStr) {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    const months = t('blog.monthsLong', { returnObjects: true });
    const monthName = months[parseInt(month, 10) - 1];
    if (i18n.language.startsWith('en')) {
      return `${monthName}${day ? ' ' + parseInt(day, 10) + ',' : ''} ${year}`;
    }
    return `${day ? day + ' de ' : ''}${monthName} de ${year}`;
  }

  if (!post) {
    return (
      <Layout>
        <main className={styles.page}>
          <p className={styles.notFound}>{t('blog.notFound')}</p>
          <Link to="/blog" className={styles.back}>{t('blog.back')}</Link>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className={styles.page}>
        <div className={styles.breadcrumb}>
          <button onClick={() => navigate('/blog')} className={styles.backBtn}>
            {t('blog.backBtn')}
          </button>
        </div>

        <article className={styles.article}>
          <header className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.date}>{formatDate(post.date)}</span>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            {post.tags?.length > 0 && (
              <div className={styles.tags}>
                {post.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            )}
          </header>

          <div className={styles.content}>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </main>
    </Layout>
  );
};
