import { technologies } from '../../data/technologies';
import styles from './TechStack.module.css';

export const TechStack = () => {
  return (
    <div className={styles.techStackContainer}>
      <h2>Tecnologias</h2>
      <div className={styles.techStack}>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.techItem}>
            <img src={tech.icon} alt={tech.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
