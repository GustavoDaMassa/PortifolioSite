import styles from './ProjectCard.module.css';

export const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <img src={project.image} alt={project.title} />
      <div className={styles.content}>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        {project.additionalLinks ? (
          <div className={styles.links}>
            {project.additionalLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        ) : (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </a>
        )}
      </div>
    </div>
  );
};
