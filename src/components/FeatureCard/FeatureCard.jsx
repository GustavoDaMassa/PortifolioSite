import styles from './FeatureCard.module.css';

export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <span className={styles.icon}>{icon}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
