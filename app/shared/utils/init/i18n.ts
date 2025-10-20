import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export const LANGUAGE_KEY = "language";
export const convertDetectedLanguage = (lang: string) => {
  const LANGUAGE_MAP: Record<string, string> = {
    "zh-HK": "zh-Hant",
    "zh-TW": "zh-Hant",
  };
  // apply map first
  if (LANGUAGE_MAP[lang]) return LANGUAGE_MAP[lang];
  // simplify language code: en-AU -> en
  return lang.split("-")[0];
};

i18n
  .use(LanguageDetector) // detect user language
  .use(backend) // loads translations from public/locales
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    supportedLngs: ["en", "zh", "zh-Hant", "jp"],
    load: "currentOnly",
    fallbackLng: "en",
    // lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // if you're using a language detector, do not define the lng option
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage

    detection: {
      order: ["localStorage", "navigator"],
      caches: [],
      convertDetectedLanguage: (lang) => {
        if (typeof window !== "undefined") {
          const storedLang = localStorage.getItem(LANGUAGE_KEY);
          if (storedLang && storedLang !== "system") {
            return storedLang;
          }
        }

        return convertDetectedLanguage(lang);
      },
    },

    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },

    ns: ["main", "home", "test"],
    defaultNS: "main",
    fallbackNS: "main",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
