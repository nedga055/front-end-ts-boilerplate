import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
// NOTE: First namespace is made default
const namespaces = [
  "common",
  "index",
  "user"
]

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(Backend)
  .init({
    react: {
      useSuspense: false
    },
    backend: {
      loadPath: './static/locales/{{lng}}/{{ns}}.json',
    },
    ns: namespaces,
    defaultNS: namespaces[0],

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    fallbackLng: 'en'
  });

export default i18n;
