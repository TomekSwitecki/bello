import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations from your const files
import {
  title as enTitle,
  subtitle as enSubtitle,
  Card1_Title as enCard1Title,
  Card1_Description as enCard1Description,
  Card2_Title as enCard2Title,
  Card2_Description as enCard2Description,
  Card3_Title as enCard3Title,
  Card3_Description as enCard3Description,
} from '../src/Assets/Sections/WhatDoWeDo/const'; // English translations

import {
  title as plTitle,
  subtitle as plSubtitle,
  Card1_Title as plCard1Title,
  Card1_Description as plCard1Description,
  Card2_Title as plCard2Title,
  Card2_Description as plCard2Description,
  Card3_Title as plCard3Title,
  Card3_Description as plCard3Description,
} from '../src/Assets/Sections/WhatDoWeDo/const_pl.js';

const userLanguage = navigator.language.split('-')[0];
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: enTitle,
        subtitle: enSubtitle,
        card1_title: enCard1Title,
        card1_description: enCard1Description,
        card2_title: enCard2Title,
        card2_description: enCard2Description,
        card3_title: enCard3Title,
        card3_description: enCard3Description,
      },
    },
    pl: {
      translation: {
        title: plTitle,
        subtitle: plSubtitle,
        card1_title: plCard1Title,
        card1_description: plCard1Description,
        card2_title: plCard2Title,
        card2_description: plCard2Description,
        card3_title: plCard3Title,
        card3_description: plCard3Description,
      },
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
