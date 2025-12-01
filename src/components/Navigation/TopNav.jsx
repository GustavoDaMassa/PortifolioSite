import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import styles from './Navigation.module.css';

export const TopNav = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.topNav}>
      <div className={styles.controls}>
        <ThemeToggle />
        <LanguageSelector />
      </div>
      <div className={styles.links}>
        <Link to="/">{t('nav.home')}</Link>
        <Link to="/medias">{t('nav.medias')}</Link>
        <Link to="/finance">{t('nav.finance')}</Link>
        <Link to="/projetos">{t('nav.projects')}</Link>
      </div>
    </nav>
  );
};
