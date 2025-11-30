import { technologies } from '../../data/technologies';
import styles from './TechStack.module.css';

export const TechStack = () => {
  // Dividir tecnologias em 3 linhas
  const itemsPerRow = Math.ceil(technologies.length / 3);
  const row1 = technologies.slice(0, itemsPerRow);
  const row2 = technologies.slice(itemsPerRow, itemsPerRow * 2);
  const row3 = technologies.slice(itemsPerRow * 2);

  // Duplicar cada linha para loop infinito
  const duplicatedRow1 = [...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2];
  const duplicatedRow3 = [...row3, ...row3, ...row3];

  return (
    <div className={styles.techStackContainer}>
      <h2>Tecnologias</h2>
      <div className={styles.carouselContainer}>
        {/* Linha 1 - esquerda para direita */}
        <div className={styles.carouselWrapper}>
          <div className={`${styles.techStack} ${styles.scrollLeft}`}>
            {duplicatedRow1.map((tech, index) => (
              <div key={`row1-${index}`} className={styles.techItem}>
                <img src={tech.icon} alt={tech.alt} />
              </div>
            ))}
          </div>
        </div>

        {/* Linha 2 - direita para esquerda */}
        <div className={styles.carouselWrapper}>
          <div className={`${styles.techStack} ${styles.scrollRight}`}>
            {duplicatedRow2.map((tech, index) => (
              <div key={`row2-${index}`} className={styles.techItem}>
                <img src={tech.icon} alt={tech.alt} />
              </div>
            ))}
          </div>
        </div>

        {/* Linha 3 - esquerda para direita */}
        <div className={styles.carouselWrapper}>
          <div className={`${styles.techStack} ${styles.scrollLeft}`}>
            {duplicatedRow3.map((tech, index) => (
              <div key={`row3-${index}`} className={styles.techItem}>
                <img src={tech.icon} alt={tech.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
