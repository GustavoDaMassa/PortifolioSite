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
  const isEn = i18n.language.startsWith('en');
  const locale = isEn ? 'en-US' : 'pt-BR';

  function formatDate(dateStr) {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-').map(Number);
    return new Intl.DateTimeFormat(locale, {
      day: day ? '2-digit' : undefined,
      month: 'long',
      year: 'numeric',
    }).format(new Date(year, month - 1, day || 1));
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

  const title = isEn && post.title_en ? post.title_en : post.title;
  const content = isEn && post.content_en ? post.content_en : post.content;
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;

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
            <h1 className={styles.title}>{title}</h1>
            {post.tags?.length > 0 && (
              <div className={styles.tags}>
                {post.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            )}
          </header>

          <div className={styles.content}>
            <ReactMarkdown
              components={{
                img: ({ src = '', alt = '' }) => {
                  const resolvedSrc = src.startsWith('/assets/')
                    ? `${baseUrl}${src}`
                    : src;

                  return <img src={resolvedSrc} alt={alt} loading="lazy" />;
                },
                a: ({ href = '', children }) => {
                  const resolvedHref = href.startsWith('/assets/')
                    ? `${baseUrl}${href}`
                    : href;

                  if (href.endsWith('.mp4')) {
                    return (
                      <video controls preload="metadata">
                        <source src={resolvedHref} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    );
                  }

                  return (
                    <a href={resolvedHref} target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  );
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </Layout>
  );
};
