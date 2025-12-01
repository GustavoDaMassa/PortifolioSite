import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import styles from './Navigation.module.css';

export const TopNav = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <nav className={styles.topNav}>
      <div className={styles.controls}>
        <ThemeToggle />
        <LanguageSelector />
      </div>
      <div className={styles.links}>
        <Link to="/" className={location.pathname === '/' ? styles.active : ''}>
          {t('nav.home')}
        </Link>
        <Link to="/medias" className={location.pathname === '/medias' ? styles.active : ''}>
          {t('nav.medias')}
        </Link>
        <Link to="/finance" className={location.pathname === '/finance' ? styles.active : ''}>
          {t('nav.finance')}
        </Link>
        <Link to="/projetos" className={location.pathname === '/projetos' ? styles.active : ''}>
          {t('nav.projects')}
        </Link>
      </div>
    </nav>
  );
};
