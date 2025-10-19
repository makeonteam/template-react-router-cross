import i18n from "i18next";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(backend) // loads translations from public/locales
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },

    load: "currentOnly",
    fallbackLng: "en",
    // lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // if you're using a language detector, do not define the lng option
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage

    ns: ["main", "home", "test"],
    defaultNS: "main",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
