// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from './shared/locales/ru.json';
import en from './shared/locales/en.json';
import lv from './shared/locales/lv.json';

i18n
  .use(LanguageDetector) // определяет язык браузера
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      en: { translation: en },
      lv: { translation: lv },
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
