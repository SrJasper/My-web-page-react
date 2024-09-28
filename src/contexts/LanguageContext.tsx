import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { useTranslation } from "react-i18next";

type LanguageType = {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultLanguageContext: LanguageType = {
  language: true,
  setLanguage: () => {},
};

export const LanguageContext = createContext<LanguageType>(defaultLanguageContext);

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<boolean>(true); // Inicia como 'true'
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = language ? 'en' : 'pt';
    if (i18n && typeof i18n.changeLanguage === 'function') {
      i18n.changeLanguage(lang);
      console.log("Language changed to:", lang);
    } else {
      console.error('i18n.changeLanguage is not a function');
    }
  }, [language, i18n]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
