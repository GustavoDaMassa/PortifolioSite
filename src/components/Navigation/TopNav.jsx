import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { getAssetPath } from '../../utils/paths';
import styles from './Navigation.module.css';

export const TopNav = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <nav className={styles.topNav}>
      <div className={styles.controls}>
        <ThemeToggle />
        <LanguageSelector />
        <Link
          to="/curriculo"
          className={`${styles.curriculoBtn} ${location.pathname === '/curriculo' ? styles.curriculoBtnActive : ''}`}
          title={t('nav.curriculo')}
        >
          <img src={getAssetPath('assets/images/icons/curriculoicon.png')} alt={t('nav.curriculo')} />
        </Link>
      </div>
      <div className={styles.links}>
        <Link to="/" className={location.pathname === '/' ? styles.active : ''}>
          {t('nav.home')}
        </Link>
        <Link to="/projetos" className={location.pathname === '/projetos' || location.pathname === '/medias' || location.pathname === '/finance' ? styles.active : ''}>
          {t('nav.projects')}
        </Link>
        <Link to="/trajetoria" className={location.pathname === '/trajetoria' ? styles.active : ''}>
          {t('nav.trajetoria')}
        </Link>
        <Link to="/blog" className={location.pathname.startsWith('/blog') ? styles.active : ''}>
          {t('nav.blog')}
        </Link>
      </div>
    </nav>
  );
};
