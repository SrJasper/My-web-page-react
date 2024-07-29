import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "../lib/locale/en.json";
import ptTranslations from "../lib/locale/pt.json";

i18n.use(initReactI18next).init({
  resources:{
    en: {
      ...enTranslations,
    },
    pt: {
      ...ptTranslations,
    },
  },
  lng: "en",
});