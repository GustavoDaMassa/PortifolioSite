import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TechStack } from '../TechStack/TechStack';
import styles from './IntroSection.module.css';

export const IntroSection = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.introSection}>
      <div className={styles.textColumn}>
        <p className={styles.techText}>{t('home.description1')}</p>
        <p className={styles.techText}>{t('home.description2')}</p>

        <Link to="/projetos" className={styles.projectsHint}>
          {t('home.projectsHint')}
        </Link>

        <TechStack rows={2} />
      </div>

      <div className={styles.videoColumn}>
        <div className={styles.videoPlaceholder}>
          <span className={styles.playIcon} />
          <span className={styles.videoText}>{t('home.videoPlaceholder')}</span>
        </div>
      </div>
    </div>
  );
};
