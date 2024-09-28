import { useNavigate } from "react-router-dom";
import React from "react";
import "./header.css";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";

interface Props {
  title: number;
}

const Header: React.FC<Props> = ({ title }) => {
  const { t } = useTranslation();

  const { language, setLanguage } = useLanguage();

  const changeLanguage = () => {
    setLanguage(!language);
  };

  const navigate = useNavigate();
  const goToMainPage = () => {
    if (title === 1) return;

    navigate("/");
  };
  const goToMePage = () => {
    if (title === 2) return;
    navigate("/me");
  };
  const goToProjectsPage = () => {
    if (title === 3) return;
    navigate("/projects");
  };

  return (
    <div className="header">
      <img
        src="../../../assets/images/profile-pic.png"
        className="header-img"
        alt="Profile"
      />
      <div className="header-options">
        <h1 className={`${title === 1 ? "green" : ""}`} onClick={goToMainPage}>
          {t("home-page") /* Página Inicial */}
        </h1>
        <h1 className={`${title === 2 ? "green" : ""}`} onClick={goToMePage}>
          {t("about-me") /* Sobre Mim */}
        </h1>
        <h1
          className={`${title === 3 ? "green" : ""}`}
          onClick={goToProjectsPage}
        >
          {t("projects") /* Projetos */}
        </h1>
      </div>

      <button
        className={`language-button ${
          localStorage.getItem("lng") === "en" ? "en-button" : "pt-button"
        }`}
        onClick={() => {
          changeLanguage();
        }}
      ></button>
    </div>
  );
};

export { Header };
