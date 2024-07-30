import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import './header.css';
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface Props {
  title: number;
}

const Header: React.FC<Props> = ({ title }) => {

  const [language, setLanguage] = useState("");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);


  const navigate = useNavigate();
  const goToMainPage = () => {
    if (title === 1) 
      return;

    navigate("/");
  };
  const goToMePage = () => {
    if (title === 2) 
      return;
    navigate("/me");
  };
  const goToProjectsPage = () => {
    if (title === 3) 
      return;
    navigate("/projects");
  };

  return (
    <div className="header">
      
      <div className='header-options'>
        <img className='../../assets/images/header-img' src="/profile-pic.png" alt="Profile" />
        <h1 className={`${title === 1 ? 'green' : ''}`} onClick={goToMainPage}>
          {t("home-page") /* Página Inicial */}
        </h1>
        <h1 className={`${title === 2 ? 'green' : ''}`} onClick={goToMePage}>
          {t("about-me") /* Sobre Mim */}
        </h1>        
        <h1 className={`${title === 3 ? 'green' : ''}`} onClick={goToProjectsPage}>
          {t("projects") /* Projetos */}
        </h1>
      </div>

      <button
        className={`language-button ${localStorage.getItem("lng") === "en" ? "en-button" : "pt-button"}`}
        onClick={() => {
        if(localStorage.getItem("lng") === "en"){
          localStorage.setItem("lng", "pt");
          setLanguage("pt");
        } else {
          localStorage.setItem("lng", "en");
          setLanguage("en");
        }
      }}
      ></button>
    </div>
  );
};

export {Header};