import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../components/Layout/Layout';
import { TagFilter } from '../../components/Blog/TagFilter';
import { PostCard } from '../../components/Blog/PostCard';
import { posts, getAllTags } from '../../data/blog/index';
import { getTagCounts } from '../../utils/tagCounts';
import styles from './Blog.module.css';

export const BlogContent = () => {
  const { t } = useTranslation();
  const [activeTag, setActiveTag] = useState(null);
  const tags = getAllTags();
  const tagCounts = getTagCounts(posts);
  const filtered = activeTag ? posts.filter(p => p.tags?.includes(activeTag)) : posts;

  return (
    <>
      <div className={styles.hero}>
        <h1 className={styles.title}>{t('blog.title')}</h1>
        <p className={styles.description}>{t('blog.description')}</p>
      </div>

      <div className={styles.filter}>
        <TagFilter tags={tags} counts={tagCounts} total={posts.length} active={activeTag} onChange={setActiveTag} />
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>{t('blog.empty')}</p>
      ) : (
        <div className={styles.grid}>
          {filtered.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export const Blog = () => {
  return (
    <Layout>
      <BlogContent />
    </Layout>
  );
};
