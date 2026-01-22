import styles from './HeroSection.module.css';

export const HeroSection = ({ title, description, tags, links }) => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>

      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      )}

      {links && links.length > 0 && (
        <div className={styles.links}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} ${link.primary ? styles.primary : styles.secondary}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
