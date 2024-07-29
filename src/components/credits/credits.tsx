import React from 'react';
import './credits.css';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Credits: React.FC = () => {

  let language = localStorage.getItem("lng") || "en";
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className="credits">
      <h2>
        {t("credits")}
      </h2>
        <div className="credits-icons">
          <img
            src="../../public/assets/images/IG.png"
            onClick={() => {
              window.open("https://www.instagram.com/leogranjadev/", "_blank");
            }}
          />
          <img
            src="../../public/assets/images/linkedin-logo.png"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/leonardo-fonseca-97565326b/",
                "_blank"
              );
            }}
          />
          <img
            src="../../public/assets/images//Wpp.png"
            onClick={() => {
              window.open("https://wa.me/5512997772296", "_blank");
            }}
          />
          <img
            src="../../public/assets/images//Github.png"
            onClick={() => {
              window.open("https://github.com/SrJasper", "_blank");
            }}
          />
          <img
            src="../../public/assets/images//CV.png"
            onClick={() => {
              window.open(
                "https://drive.google.com/drive/folders/1jyQVl4xYsjufltCrIHQugWa3Qd6nuwzv?usp=sharing",
                "_blank"
              );
            }}
          />
        </div>
      </div>
  );
};

export default Credits;