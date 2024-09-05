/* eslint-disable*/
import React, { useEffect } from "react";
import "./projects.css";
import { Header } from "../components/header/header";
import Credits from "../components/credits/credits";
import { useTranslation } from "react-i18next";

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let language = localStorage.getItem("lng") || "en";
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div>
      <Header title={3} />
      <div className="title">
        <h1>{t("projects-title")}</h1>
      </div>

      <div className="projects-presentation">
        <p>{t("projects-text")}</p>
        <p> {t("projects-text-2")}</p>
      </div>

      <div className="separation-line"></div>

      <div className="project-tab">
        <img
          onClick={() => {
            window.open("https://stock-manager-front.vercel.app", "StockPage");
          }}
          src="../../assets/images/stocks.png"
          alt="stck"
        />
        <div className="project-description">
          <h2>{t("stock-title")}</h2>
          <p>{t("stock-text")}</p>
        </div>
      </div>

      <div className="separation-line"></div>

      <div className="project-tab">
        <img
          onClick={() => {
            window.open("https://post-tdd-front.vercel.app", "StockPage");
          }}
          src="../../assets/images/posts.png"
          alt="stck"
        />
        <div className="project-description">
          <h2>Posts</h2>
          <p>{t("posts-text")}</p>
        </div>
      </div>

      {/* <div className="separation-line"></div>

      <div className="project-tab">
        <img
          onClick={() => {
            window.open(
              "https://loja.leosstore.shop/listar/todos",
              "InventoryPage"
            );
          }}
          src="../../assets/images/store.png"
          alt="stre"
        />
        <div className="project-description">
          <h2>{t("inventory-title")}</h2>
          <p>{t("inventory-text")}</p>
        </div>
      </div> */}

      <div className="separation-line"></div>

      <div className="project-tab">
        <img
          onClick={() => {
            window.open("https://leostaskmanager.netlify.app/", "TaskPage");
          }}
          src="../../assets/images/task.png"
          alt="task"
        />
        <div className="project-description">
          <h2>{t("task-title")}</h2>
          <p>{t("task-text")}</p>
        </div>
      </div>

      <div className="separation-line"></div>

      <div className="project-tab">
        <img
          onClick={() => {
            window.open("https://leoscalcproject.netlify.app/", "StockPage");
          }}
          src="../../assets/images/calc.png"
          alt="calc"
        />
        <div className="project-description">
          <h2>{t("calc-title")}</h2>
          <p>{t("calc-text")}</p>
        </div>
      </div>

      <div className="separation-line"></div>

      <div className="project-tab">
        <img
          onClick={() => {
            window.open(
              "https://github.com/SrJasper/Jet/releases/tag/JeT",
              "StockPage"
            );
          }}
          src="../../assets/images/jet.png"
          alt="jet"
        />
        <div className="project-description">
          <h2>JeT</h2>
          <p>{t("jet-text")}</p>
        </div>
      </div>

      <div className="separation-line"></div>

      <Credits />
    </div>
  );
};

export default ProjectsPage;
