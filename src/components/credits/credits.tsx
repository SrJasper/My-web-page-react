import React from 'react';
import './credits.css';
import { useTranslation } from 'react-i18next';

const Credits: React.FC = () => {

  const { t } = useTranslation();

  return (
    <div className="credits">
      <h2>
        {t("credits")}
      </h2>
        <div className="credits-icons">
          <img
            src="../../../assets/images/IG.png"
            onClick={() => {
              window.open("https://www.instagram.com/leogranjadev/", "_blank");
            }}
          />
          <img
            src="../../../assets/images/linkedin-logo.png"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/leonardo-fonseca-97565326b/",
                "_blank"
              );
            }}
          />
          <img
            src="../../../assets/images/Wpp.png"
            onClick={() => {
              window.open("https://wa.me/5512997772296", "_blank");
            }}
          />
          <img
            src="../../../assets/images/Github.png"
            onClick={() => {
              window.open("https://github.com/SrJasper", "_blank");
            }}
          />
          <img
            src="../../../assets/images/CV.png"
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