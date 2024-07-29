import { Header } from "../components/header/header";
import React, { useEffect } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Credits from "../components/credits/credits";
import LanguageController from "../assets/locale/language-controller";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const goToProjectsPage = () => {
    navigate("/projects");
  };

  let language = localStorage.getItem("lng") || "en";
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const [cardLanguage, setCardLanguage] = React.useState(true);

  useEffect(()=>{
    if(localStorage.getItem("lng") === null){
      setCardLanguage(true);
    } else {
      setCardLanguage(false);
    }
  },[, localStorage.getItem("lng")]);

  return (
    <div>
      <Header title={1} />
      {cardLanguage && 
      <LanguageController
        handleClose={() => {
          setCardLanguage(false);
        }}
      />}

      <div className="title">
        <h1>{t("home-title-one")}</h1>
        <h1>{t("home-title-two")}</h1>
        <h1>{t("home-title-three")}</h1>
      </div>

      <div className="container-main-options">
        <div>
          <img
            src="../../public/assets/images/guy-Icon.png"
            alt=""
            className="page-image"
          />
          <label className="page-text">{t("about-me")}</label>
        </div>
        <div className="hover" onClick={goToProjectsPage}>
          <img src="../../public/assets/images/pc.png" alt="" className="page-image" />
          <label className="page-text">{t("projects")}</label>
        </div>
        <div>
          <img
            src="../../public/assets/images/Contact.png"
            alt=""
            className="page-image"
          />
          <label className="page-text">{t("contact")}</label>
        </div>
      </div>

      <div className="gap-space"></div>

      <Credits />
    </div>
  );
};

export default Home;
