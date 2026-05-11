import { socialLinks } from '../../data/socialLinks';
import styles from './Footer.module.css';

export const Footer = () => {
  const contactLinks = socialLinks.filter(l => l.id !== 'resume');

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.name}>Gustavo Henrique</p>
        <p className={styles.tagline}>Desenvolvedor de Software</p>

        <div className={styles.socials}>
          {contactLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.alt}
              className={styles.iconLink}
            >
              <img src={link.icon} alt={link.alt} className={styles.icon} />
            </a>
          ))}
        </div>

        <a href="mailto:gustavohenrique3gb@gmail.com" className={styles.email}>
          gustavohenrique3gb@gmail.com
        </a>

        <hr className={styles.divider} />

        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Gustavo Henrique
        </p>
      </div>
    </footer>
  );
};
