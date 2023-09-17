import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const userLanguage = navigator.language.split('-')[0];

const enTranslation = require('../src/Assets/Translations/Translations_eng.json');
const plTranslation = require('../src/Assets/Translations/Translations_pl.json');



i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    pl: {
      translation: plTranslation,
    },
  },
  fallbackLng: userLanguage || 'en',
  debug: true,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
