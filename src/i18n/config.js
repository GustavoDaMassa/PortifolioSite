import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './locales/pt.json';
import en from './locales/en.json';

const LANGUAGE_STORAGE_KEY = 'app-language';
const SUPPORTED_LANGUAGES = ['pt', 'en'];

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return 'pt';
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
    return savedLanguage;
  }

  const browserLanguage = window.navigator.language?.slice(0, 2);
  return SUPPORTED_LANGUAGES.includes(browserLanguage) ? browserLanguage : 'pt';
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en }
    },
    supportedLngs: SUPPORTED_LANGUAGES,
    load: 'languageOnly',
    lng: getInitialLanguage(),
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
