import React from "react";
import "./aboutMe.css";
import { Header } from "../components/header/header";
import Credits from "../components/credits/credits";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const AboutMe: React.FC = () => {
  let language = localStorage.getItem("lng") || "en";
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const [certificates, setCertificates] = React.useState(false);

  const handleCertificates = () => {
    setCertificates(!certificates);
  }

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
            className={`${certificates ? 'certificates' : ''}`}
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
        <div>
          <img src="../../../assets/images/ts-icon.png" alt="" />
          <h2>TypeScript</h2>
        </div>
        <div>
          <img src="../../../assets/images/react-icon.png" alt="" />
          <h2>React.JS</h2>
        </div>
        <div>
          <img src="../../../assets/images/nest-icon.png" alt="" />
          <h2>NestJS</h2>
        </div>
        <div>
          <img src="../../../assets/images/python-icon.png" alt="" />
          <h2>Python</h2>
        </div>
        <div>
          <img src="../../../assets/images/js-icon.png" alt="" />
          <h2>JavaScript</h2>
        </div>
        <div>
          <img src="../../../assets/images/html-icon.png" alt="" />
          <h2>HTML</h2>
        </div>
        <div>
          <img src="../../../assets/images/css-icon.png" alt="" />
          <h2>CSS</h2>
        </div>
        <div>
          <img src="../../../assets/images/nodejs-icon.png" alt="" />
          <h2>Node.JS</h2>
        </div>
        <div>
          <img src="../../../assets/images/sql-icon.png" alt="" />
          <h2>MySQL</h2>
        </div>
        <div>
          <img src="../../../assets/images/postgress-icon.png" alt="" />
          <h2>PostgreSQL</h2>
        </div>
        <div>
          <img src="../../../assets/images/mongo-icon.png" alt="" />
          <h2>Mongo DB</h2>
        </div>
        <div>
          <img src="../../../assets/images/prisma-icon.png" alt="" />
          <h2>Prisma</h2>
        </div>
      </div>

      <div className="separation-line gap"></div>

      <Credits />
    </div>
  );
};

export default AboutMe;
