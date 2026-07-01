import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const title = t(`projects.${project.id}.title`);

  const cover = project.image ? (
    <img src={project.image} alt={title} />
  ) : (
    <div
      className={styles.generatedCover}
      style={project.coverColor ? { '--cover-color': project.coverColor } : undefined}
    >
      {project.coverIcon ? (
        <img src={project.coverIcon} alt={title} className={styles.coverIcon} />
      ) : (
        <span className={styles.coverInitials}>{project.coverLabel}</span>
      )}
    </div>
  );

  const mediaArea = project.featured ? (
    <div className={styles.mediaWrapper}>
      {cover}
      {project.video && isHovered && (
        <iframe
          src={project.video}
          className={styles.videoPreview}
          allow="autoplay; encrypted-media"
          title={title}
        />
      )}
    </div>
  ) : cover;

  const cardContent = (
    <>
      {mediaArea}
      <div className={styles.content}>
        <h1>{title}</h1>
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
          <span className={styles.viewHint}>
            {project.route ? t('allProjects.viewProject') : t('allProjects.viewGithub')} →
          </span>
        )}
      </div>
    </>
  );

  if (project.featured && project.route) {
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

  if (project.featured) {
    return (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.projectCard} ${styles.featured}`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className={styles.projectCard}>
      {cardContent}
    </div>
  );
};
