import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const mediaArea = project.featured ? (
    <div className={styles.mediaWrapper}>
      <img src={project.image} alt={t(`projects.${project.id}.title`)} />
      {project.video && isHovered && (
        <iframe
          src={project.video}
          className={styles.videoPreview}
          allow="autoplay; encrypted-media"
          title={t(`projects.${project.id}.title`)}
        />
      )}
    </div>
  ) : (
    <img src={project.image} alt={t(`projects.${project.id}.title`)} />
  );

  const cardContent = (
    <>
      {mediaArea}
      <div className={styles.content}>
        <h1>{t(`projects.${project.id}.title`)}</h1>
        <p>{t(`projects.${project.id}.description`)}</p>
        {!project.featured && (
          project.additionalLinks ? (
            <div className={styles.links}>
              {project.additionalLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          ) : (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              {t('allProjects.viewGithub')}
            </a>
          )
        )}
        {project.featured && (
          <span className={styles.viewHint}>{t('allProjects.viewProject')} →</span>
        )}
      </div>
    </>
  );

  if (project.featured) {
    return (
      <Link
        to={project.route}
        className={`${styles.projectCard} ${styles.featured}`}
        onMouseEnter={() => project.video && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={styles.projectCard}>
      {cardContent}
    </div>
  );
};
