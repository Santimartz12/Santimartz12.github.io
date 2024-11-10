import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Languages
import en from './library/en';
import es from './library/es';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;