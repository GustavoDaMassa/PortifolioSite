import { useTranslation } from 'react-i18next';
import { technologies } from '../../data/technologies';
import styles from './TechStack.module.css';

export const TechStack = ({ rows = 3 }) => {
  const { t } = useTranslation();

  const itemsPerRow = Math.ceil(technologies.length / rows);
  const rowsData = Array.from({ length: rows }, (_, index) =>
    technologies.slice(index * itemsPerRow, (index + 1) * itemsPerRow)
  );

  return (
    <div className={styles.techStackContainer}>
      <h2>{t('home.techTitle')}</h2>
      <div className={styles.carouselContainer}>
        {rowsData.map((row, rowIndex) => {
          const duplicatedRow = [...row, ...row, ...row];
          const direction = rowIndex % 2 === 0 ? styles.scrollLeft : styles.scrollRight;

          return (
            <div className={styles.carouselWrapper} key={`row-${rowIndex}`}>
              <div className={`${styles.techStack} ${direction}`}>
                {duplicatedRow.map((tech, index) => (
                  <div key={`row${rowIndex}-${index}`} className={styles.techItem}>
                    <img src={tech.icon} alt={tech.alt} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
