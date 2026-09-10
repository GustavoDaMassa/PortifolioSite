import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageGate.module.css';

const LANGUAGE_STORAGE_KEY = 'app-language';

const LANGUAGES = [
  { code: 'pt', label: '.pt' },
  { code: 'en', label: '.en' },
  { code: 'it', label: '.it' },
];

export const LanguageGate = ({ onSelect }) => {
  const { i18n } = useTranslation();
  const current = LANGUAGES.find((lang) => i18n.language.startsWith(lang.code)) ?? LANGUAGES[0];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleSelect = (code) => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, code);
    i18n.changeLanguage(code);
    onSelect();
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Language selection">
      <button
        type="button"
        className={styles.close}
        onClick={onSelect}
        aria-label="Close"
      >
        ×
      </button>

      <div className={styles.panel}>
        <div className={styles.options}>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              className={`${styles.option} ${lang.code === current.code ? styles.optionActive : ''}`}
              onClick={() => handleSelect(lang.code)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
