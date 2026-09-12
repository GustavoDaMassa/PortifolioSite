import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { socialLinks } from '../../data/socialLinks';
import { getAssetPath } from '../../utils/paths';
import { useTheme } from '../../context/ThemeContext';
import styles from './ProfileSection.module.css';

export const ProfileSection = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const profileImage = theme === 'light' ? 'assets/images/profile-light.jpg' : 'assets/images/profile.png';

  return (
    <div className={styles.profileSection}>
      <div
        className={styles.profilePic}
        style={{ backgroundImage: `url(${getAssetPath(profileImage)})` }}
      ></div>
      <h1>{t('home.title')}</h1>

      <div className={styles.socials}>
        {socialLinks.filter(link => link.id !== 'resume').map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialItem}
          >
            <span className={styles.socialIcon}>
              <img src={link.icon} alt={link.alt} />
            </span>
          </a>
        ))}
      </div>

      <div className={styles.hints}>
        <Link to="/curriculo" className={styles.curriculoHint}>
          ← {t('home.curriculoHint')}
        </Link>
        <Link to="/blog" className={styles.blogHint}>
          {t('home.blogHint')}
        </Link>
      </div>
    </div>
  );
};
