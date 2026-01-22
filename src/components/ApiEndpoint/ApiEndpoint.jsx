import styles from './ApiEndpoint.module.css';

export const ApiEndpoint = ({ method, route, description }) => {
  const methodClass = styles[method.toLowerCase()] || styles.get;

  return (
    <div className={styles.endpoint}>
      <div className={styles.header}>
        <span className={`${styles.method} ${methodClass}`}>{method}</span>
        <code className={styles.route}>{route}</code>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
