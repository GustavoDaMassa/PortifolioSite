import { technologies } from '../../data/technologies';
import styles from './TechStack.module.css';

export const TechStack = () => {
  // Duplicar o array de tecnologias para criar loop infinito
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className={styles.techStackContainer}>
      <h2>Tecnologias</h2>
      <div className={styles.carouselWrapper}>
        <div className={styles.techStack}>
          {duplicatedTechs.map((tech, index) => (
            <div key={index} className={styles.techItem}>
              <img src={tech.icon} alt={tech.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
