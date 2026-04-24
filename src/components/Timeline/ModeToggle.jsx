import styles from './ModeToggle.module.css';

export const ModeToggle = ({ mode, onChange }) => (
  <div className={styles.wrapper}>
    <button
      className={`${styles.btn} ${mode === 'narrativo' ? styles.active : ''}`}
      onClick={() => onChange('narrativo')}
    >
      Narrativo
    </button>
    <button
      className={`${styles.btn} ${mode === 'tecnico' ? styles.active : ''}`}
      onClick={() => onChange('tecnico')}
    >
      Técnico
    </button>
  </div>
);
