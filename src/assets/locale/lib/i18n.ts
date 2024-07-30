import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "../language/en.json";
import ptTranslations from "../language/pt.json";

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