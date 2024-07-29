import React, { useEffect } from "react";
import "./projects.css";
import { Header } from "../components/header/header";
import Credits from "../components/credits/credits";
import { t } from "i18next";
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
    <div className="page">
      <Header title={3} />

      <div className="title">
        <h1>{t("projects-title")}</h1>
      </div>

      <div className="projects-presentation">
        <p>
          {t("projects-text")}
        </p>
        <p> {t("projects-text-2")}</p>
      </div>

      <div className="separation-line"></div>

      <div className="project-tab">
        <img src="../../public/Images/stocks.png" alt="stck" />
        <div className="project-description">
          <h2>{t("stock-title")}</h2>
          <p>
            {t("stock-text")}
          </p>
        </div>
      </div>

      <div className="separation-line"></div>

      <div className="project-tab">
        <img src="../../public/Images/store.png" alt="stre" />
        <div className="project-description">
          <h2>
            {t("stock-title")}
          </h2>
          <p>
            {t("stock-text")}
          </p>
        </div>
      </div>

      <div className="separation-line"></div>

      <div className="project-tab">
        <img src="../../public/Images/task.png" alt="task" />

        <div className="project-description">
          <h2>
            {t("task-title")}
          </h2>
          <p>
            {t("task-text")}
          </p>
        </div>
      </div>

      <div className="separation-line"></div>

      <div className="project-tab">
        <img src="../../public/Images/calc.png" alt="calc" />
        <div className="project-description">
          <h2>
            {t("calc-title")}
          </h2>
          <p>
            {t("calc-text")}
          </p>
        </div>
      </div>

      <div className="separation-line"></div>

      <div className="project-tab">
        <img src="../../public/Images/jet.png" alt="jet" />

        <div className="project-description">
          <h2>
            JeT
          </h2>
          <p>
            {t("jet-text")}
          </p>
        </div>
      </div>

      <div className="separation-line"></div>

      <Credits />
    </div>
  );
};

export default ProjectsPage;
