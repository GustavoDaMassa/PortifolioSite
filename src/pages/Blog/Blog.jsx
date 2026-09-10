import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../components/Layout/Layout';
import { PostListItem } from '../../components/Blog/PostListItem';
import { posts, getAllTags } from '../../data/blog/index';
import { getTagCounts } from '../../utils/tagCounts';
import styles from './Blog.module.css';

export const BlogContent = () => {
  const { t } = useTranslation();
  const [activeTag, setActiveTag] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [searchQuery, setSearchQuery] = useState('');
  const tags = getAllTags();
  const tagCounts = getTagCounts(posts);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filtered = posts.filter((post) => {
    if (activeTag && !post.tags?.includes(activeTag)) return false;
    if (!normalizedQuery) return true;

    const haystack = [post.title, post.title_en, post.excerpt, post.excerpt_en, ...(post.tags || [])]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });

  const sorted = [...filtered].sort((a, b) => {
    const cmp = a.date > b.date ? 1 : a.date < b.date ? -1 : 0;
    return sortOrder === 'desc' ? -cmp : cmp;
  });

  return (
    <>
      <div className={styles.topBar}>
        <h1 className={styles.title}>{t('blog.title')}</h1>

        <div className={styles.topBarActions}>
          <select
            className={styles.sortSelect}
            value={activeTag}
            onChange={(e) => setActiveTag(e.target.value)}
            aria-label={t('blog.tagLabel')}
          >
            <option value="">{t('blog.allTags')} ({posts.length})</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag} ({tagCounts[tag] ?? 0})
              </option>
            ))}
          </select>

          <select
            className={styles.sortSelect}
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            aria-label={t('blog.sortLabel')}
          >
            <option value="desc">{t('blog.sortRecent')}</option>
            <option value="asc">{t('blog.sortOldest')}</option>
          </select>

          <div className={styles.searchField}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className={styles.searchIcon}>
              <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.4" />
              <line x1="10.2" y1="10.2" x2="14" y2="14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              className={styles.searchInput}
              placeholder={t('blog.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {sorted.length === 0 ? (
        <p className={styles.empty}>{t('blog.empty')}</p>
      ) : (
        <div className={styles.list}>
          {sorted.map(post => (
            <PostListItem key={post.slug} post={post} />
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
