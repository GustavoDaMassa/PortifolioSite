import { useTranslation } from 'react-i18next';
import styles from './LanguageSelector.module.css';

const LANGUAGE_STORAGE_KEY = 'app-language';

export const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const isPt = i18n.language.startsWith('pt');

  const toggleLanguage = () => {
    const newLang = isPt ? 'en' : 'pt';
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={styles.langSelector}
      aria-label={t('ui.changeLanguage')}
    >
      {isPt ? 'EN' : 'PT'}
    </button>
  );
};
