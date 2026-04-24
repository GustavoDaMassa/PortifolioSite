import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import styles from './ThemeToggle.module.css';

export const ThemeToggle = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggle}
      aria-label={t('ui.toggleTheme')}
    >
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  );
};
