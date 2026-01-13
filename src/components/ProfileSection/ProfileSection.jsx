import { useTranslation } from 'react-i18next';
import { socialLinks } from '../../data/socialLinks';
import { getAssetPath } from '../../utils/paths';
import styles from './ProfileSection.module.css';

export const ProfileSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.profileSection}>
      <div
        className={styles.profilePic}
        style={{ backgroundImage: `url(${getAssetPath('assets/images/profile.png')})` }}
      ></div>
      <h1>{t('home.title')}</h1>

      <div className={styles.socials}>
        {socialLinks.map((link) => {
          let linkUrl = link.url;
          if (link.id === 'resume') {
            linkUrl = i18n.language === 'en'
              ? getAssetPath('assets/images/CurriculumGustavoDev.pdf')
              : getAssetPath('assets/images/CurriculoGustavoDev.pdf');
          }

          return (
            <a
              key={link.id}
              href={linkUrl}
              target={link.download ? undefined : "_blank"}
              rel={link.download ? undefined : "noopener noreferrer"}
              download={link.download}
            >
              <img src={link.icon} alt={link.alt} />
            </a>
          );
        })}
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
