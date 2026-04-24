import { useState } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { TagFilter } from '../../components/Blog/TagFilter';
import { PostCard } from '../../components/Blog/PostCard';
import { posts, getAllTags } from '../../data/blog/index';
import styles from './Blog.module.css';

export const Blog = () => {
  const [activeTag, setActiveTag] = useState(null);
  const tags = getAllTags();
  const filtered = activeTag ? posts.filter(p => p.tags?.includes(activeTag)) : posts;

  return (
    <Layout>
      <main className={styles.page}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.description}>
            Conteúdo técnico aprofundado — o que não cabe num post do LinkedIn.
          </p>
        </div>

        <div className={styles.filter}>
          <TagFilter tags={tags} active={activeTag} onChange={setActiveTag} />
        </div>

        {filtered.length === 0 ? (
          <p className={styles.empty}>Nenhum post encontrado para essa tag.</p>
        ) : (
          <div className={styles.grid}>
            {filtered.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </main>
    </Layout>
  );
};
