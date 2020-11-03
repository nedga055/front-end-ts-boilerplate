import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import common_en_US from "./public/static/locales/en-US/common.json";
import common_fr from "./public/static/locales/fr/common.json";
import index_en_US from "./public/static/locales/en-US/index.json";
import index_fr from "./public/static/locales/fr/index.json";
import user_en_US from "./public/static/locales/en-US/user.json";
import user_fr from "./public/static/locales/fr/user.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      'en-US': {
        common: common_en_US,
        index: index_en_US,
        user: user_en_US,
      },
      'fr': {
        common: common_fr,
        index: index_fr,
        user: user_fr,
      }
    },
    defaultNS: "common",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
