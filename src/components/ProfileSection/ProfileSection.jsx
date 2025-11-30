import { useTranslation } from 'react-i18next';
import { socialLinks } from '../../data/socialLinks';
import { getAssetPath } from '../../utils/paths';
import styles from './ProfileSection.module.css';

export const ProfileSection = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.profileSection}>
      <div
        className={styles.profilePic}
        style={{ backgroundImage: `url(${getAssetPath('assets/images/profile.jpg')})` }}
      ></div>
      <h1>{t('home.title')}</h1>

      <div className={styles.socials}>
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target={link.download ? undefined : "_blank"}
            rel={link.download ? undefined : "noopener noreferrer"}
            download={link.download}
          >
            <img src={link.icon} alt={link.alt} />
          </a>
        ))}
      </div>

      <p className={styles.techText}>
        {t('home.description1')}
      </p>

      <p className={styles.techText}>
        {t('home.description2')}
      </p>
    </div>
  );
};
