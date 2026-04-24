import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Layout } from '../../components/Layout/Layout';
import { getPost } from '../../data/blog/index';
import styles from './BlogPost.module.css';

function formatDate(dateStr) {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return `${day ? day + ' de ' : ''}${months[parseInt(month, 10) - 1]} de ${year}`;
}

export const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPost(slug);

  if (!post) {
    return (
      <Layout>
        <main className={styles.page}>
          <p className={styles.notFound}>Post não encontrado.</p>
          <Link to="/blog" className={styles.back}>← Voltar ao blog</Link>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className={styles.page}>
        <div className={styles.breadcrumb}>
          <button onClick={() => navigate('/blog')} className={styles.backBtn}>
            ← Blog
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
