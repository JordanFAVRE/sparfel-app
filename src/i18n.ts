import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import detector from "i18next-browser-languagedetector";
import en from '../src/locales/en.json';
import de from '../src/locales/de.json';

export const resources = {
    en: {translation: en},
    de: {translation: de},
};
export const defaultNS = 'translation';

i18n.use(Backend)
    .use(detector)
    .use(initReactI18next)
    .init({
        returnNull: false,
        fallbackLng: ['en', 'de'],
        debug: true,
        supportedLngs: ["en", "de"],
        ns: ['translation'],
        defaultNS,
        load: 'languageOnly',
        nonExplicitSupportedLngs: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources,
        // backend: {
        //     loadPath: "/locales/{{lng}}.json",
        // },
    });

export default i18n;
