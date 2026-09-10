import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageGateContext } from '../../context/LanguageGateContext';
import styles from './LanguageSelector.module.css';

export const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const { openGate } = useContext(LanguageGateContext);

  return (
    <button
      type="button"
      onClick={openGate}
      className={styles.langSelector}
      aria-label={t('ui.changeLanguage')}
    >
      {i18n.language.slice(0, 2).toUpperCase()}
    </button>
  );
};
