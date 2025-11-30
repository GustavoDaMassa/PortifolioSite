import { useTranslation } from 'react-i18next';
import styles from './LanguageSelector.module.css';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={styles.langSelector}
      aria-label="Change language"
    >
      {i18n.language === 'pt' ? 'EN' : 'PT'}
    </button>
  );
};
