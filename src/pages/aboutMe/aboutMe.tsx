import React from "react";
import "./aboutMe.css";
import { Header } from "../../components/header/header";
import Credits from "../../components/credits/credits";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Framework from "../../components/frameworks/frameworks";
import { frameworks } from "./frameworksList";


const AboutMe: React.FC = () => {

  const { t } = useTranslation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header title={2} />

      <div className="title-about-me">
        <h1>{t("about-me")}</h1>
      </div>

      <div className="separation-line"></div>

      <div className="SM-bg">
        <p>
          {t("about-me-description")}
        </p>
      </div>

      {/* <div className="certificates-div">      
        <div className={`certificates-container ${certificates ? 'certificates' : ''}`}>
          <button 
            className={`width ${certificates ? 'certificates' : ''}`}
            onClick={handleCertificates}>
              <h2>
                {t("certificate-title")}  
              </h2> 
          </button>
          <div className={`${certificates ? 'disabled' : 'certificate-grid'}`}>
            <button>
              UNIFESP
            </button>
            <button>
              EXCEL
            </button>  
            <button>
              TDD
            </button>
          </div>
        </div>
      </div> */}

      <div className="linguagens-texto">{t("language-text")}</div>

      

      <div className="linguagens-grid">
      { frameworks.map((framework, index) => (
        <Framework
          key={index}
          framework={framework}
        />
      ))}
      </div>
      <div className="separation-line gap"></div>
      <Credits />
    </div>
  );
};

export default AboutMe;
