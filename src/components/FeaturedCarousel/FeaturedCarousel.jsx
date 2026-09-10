import { Link, useLocation } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSwipe } from '../../hooks/useSwipe';
import styles from './FeaturedCarousel.module.css';

export const FeaturedCarousel = ({ projects }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [index, setIndex] = useState(0);
  const stageRef = useRef(null);
  const current = projects[index];

  const goTo = (target) => {
    setIndex(((target % projects.length) + projects.length) % projects.length);
  };

  useSwipe(() => goTo(index + 1), () => goTo(index - 1), 50, stageRef);

  const title = t(`projects.${current.id}.title`);
  const description = t(`projects.${current.id}.description`);
  const viewLabel = current.route ? t('allProjects.viewProject') : t('allProjects.viewGithub');

  const stageContent = (
    <>
      <div className={styles.backgroundLayer}>
        <img src={current.image} alt="" className={styles.backgroundImage} />
        <div className={styles.backgroundOverlay} />
      </div>

      <div className={styles.info}>
        <p className={styles.description}>{description}</p>
        <div className={styles.nameplate}>
          <span className={styles.name}>{title}</span>
        </div>
        <span className={styles.viewHint}>{viewLabel} →</span>
      </div>
    </>
  );

  return (
    <div className={styles.carousel}>
      <div className={styles.stage} ref={stageRef}>
        {current.route ? (
          <Link
            to={current.route}
            state={{ backgroundLocation: location }}
            className={styles.stageLink}
          >
            {stageContent}
          </Link>
        ) : (
          <a
            href={current.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.stageLink}
          >
            {stageContent}
          </a>
        )}
      </div>

      <div className={styles.thumbStrip}>
        <button
          type="button"
          className={`${styles.arrow} ${styles.left}`}
          onClick={() => goTo(index - 1)}
          aria-label="Previous project"
        >
          ←
        </button>

        <div className={styles.thumbs}>
          {projects.map((project, i) => (
            <button
              key={project.id}
              type="button"
              className={`${styles.thumb} ${i === index ? styles.thumbActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={t(`projects.${project.id}.title`)}
            >
              <img src={project.image} alt="" />
            </button>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.right}`}
          onClick={() => goTo(index + 1)}
          aria-label="Next project"
        >
          →
        </button>
      </div>
    </div>
  );
};
