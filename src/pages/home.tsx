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
  const goToMePage = () => {
    navigate("/me");
  };
  const goToWppPage = () => {
    window.open("https://wa.me/5512997772296", "_blank");
  };

  const { t } = useTranslation();

  const [cardLanguage, setCardLanguage] = React.useState(true);

  useEffect(() => {
    if (localStorage.getItem("lng") === null) {
      setCardLanguage(true);
    } else {
      setCardLanguage(false);
    }
  }, [localStorage.getItem("lng")]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="use-width">
      <Header title={1} />
      {cardLanguage && (
        <LanguageController
          handleClose={() => {
            setCardLanguage(false);
          }}
        />
      )}

      <div className="title">
        <h1>{t("home-title-one")}</h1>
        <h1>{t("home-title-two")}</h1>
        <h1>{t("home-title-three")}</h1>
      </div>

      <div className="container-main-options">
        <div className="hover" onClick={goToMePage}>
          <img
            src="../../assets/images/guy-Icon.png"
            alt=""
            className="page-image"
          />
          <label className="page-text">{t("about-me")}</label>
        </div>
        <div className="hover" onClick={goToProjectsPage}>
          <img src="../../assets/images/pc.png" alt="" className="page-image" />
          <label className="page-text">{t("projects")}</label>
        </div>
        <div className="hover" onClick={goToWppPage}>
          <img
            src="../../assets/images/Contact.png"
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
