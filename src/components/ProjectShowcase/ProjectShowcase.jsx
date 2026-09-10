import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import styles from './ProjectShowcase.module.css';

export const ProjectShowcase = ({ title, longTitle, description, tags, videoSrc, posterSrc, appUrl, docsRoute, githubUrl }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div className={styles.page}>
      <button
        type="button"
        className={styles.close}
        onClick={() => navigate(-1)}
        aria-label="Close"
      >
        ×
      </button>

      <h1 className={styles.title}>{title}</h1>

      {videoSrc ? (
        <div className={styles.videoWrapper}>
          <VideoPlayer videoSrc={videoSrc} posterSrc={posterSrc} />
        </div>
      ) : (
        <div className={styles.techVideoPlaceholder}>
          <span className={styles.playIcon} />
          <span>{t('projectShowcase.presentationVideoPlaceholder')}</span>
        </div>
      )}

      <div className={styles.intro}>
        {longTitle && <p className={styles.longTitle}>{longTitle}</p>}
        {description && <p className={styles.description}>{description}</p>}

        {tags && tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>

      <div className={styles.techVideoPlaceholder}>
        <span className={styles.playIcon} />
        <span>{t('projectShowcase.techVideoPlaceholder')}</span>
      </div>

      <div className={styles.links}>
        {appUrl && (
          <a href={appUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            {t('projectShowcase.app')}
          </a>
        )}
        {docsRoute && (
          <Link to={docsRoute} className={styles.link}>
            {t('projectShowcase.docs')}
          </Link>
        )}
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            {t('projectShowcase.github')}
          </a>
        )}
      </div>
    </div>
  );
};
