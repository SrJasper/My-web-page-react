/* eslint-disable*/
import React, { useEffect } from "react";
import "./projects.css";
import { Header } from "../../components/header/header";
import Credits from "../../components/credits/credits";
import { useTranslation } from "react-i18next";
import Project from "../../components/project/project";
import { projects } from "./projectsList";

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();


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

      {/* 
      O nome da imagem deve ser "project.png" 
      e o texto deve ser "${project}-title" e "${project}-text"
      */}
      {projects.map((project, index) => (
        <div className="project-field" key={index}>
          <Project 
            projectTitle={project.projectTitle}
            link={project.link}
          />
        </div>
      ))}
      
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

      <Credits />
    </div>
  );
};

export default ProjectsPage;
