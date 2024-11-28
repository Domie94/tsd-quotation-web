import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import en from './assets/locales/en/translation.json';
import la from './assets/locales/la/translation.json';

// Initialize i18n
i18n
    .use(initReactI18next) // Pass i18n to react-i18next
    .init({
        resources: {
            en: { translation: en },
            la: { translation: la }
        },
        lng: localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') : 'en', // Default language
        fallbackLng: localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') : 'en', // Fallback language if translation is missing
        interpolation: {
            escapeValue: false // React already escapes by default
        }
    });

export default i18n;
