import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  const cardContent = (
    <>
      <img src={project.image} alt={t(`projects.${project.id}.title`)} />
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
      <Link to={project.route} className={`${styles.projectCard} ${styles.featured}`}>
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
