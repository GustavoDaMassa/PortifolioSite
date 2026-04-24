import { useTranslation } from 'react-i18next';
import styles from './ModeToggle.module.css';

export const ModeToggle = ({ mode, onChange }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.btn} ${mode === 'narrativo' ? styles.active : ''}`}
        onClick={() => onChange('narrativo')}
      >
        {t('trajetoria.toggle.narrativo')}
      </button>
      <button
        className={`${styles.btn} ${mode === 'tecnico' ? styles.active : ''}`}
        onClick={() => onChange('tecnico')}
      >
        {t('trajetoria.toggle.tecnico')}
      </button>
    </div>
  );
};
