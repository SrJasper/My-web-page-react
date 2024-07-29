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

  return (
    <div>
      <Header title={2} />

      <div className="title-about-me">
        <h1>{t("about-me")}</h1>
      </div>

      <div className="separation-line"></div>

      <div className="SM-bg">
        <p>
          Sou Leonardo Fonseca, formado pela UNIFESP e apaixonado por tecnologia. Com uma abordagem focada e diligente, busco constantemente crescimento pessoal e profissional. Minha formação acadêmica e entusiasmo por tecnologia me permitem enfrentar desafios de forma eficaz e inovadora. Minhas principais habilidades são em NestJS, ReactJS, TypeScript e TDD, áreas nas quais me dedico a desenvolver soluções impactantes e de alta qualidade.
        </p>
      </div>

      <div className="linguagens-texto">{t("language-text")}</div>

      <div className="linguagens-grid">
        <div className="linguagem">
          <img src="../Images/ts-icon.png" alt="" />
          <h2>TypeScript</h2>
        </div>
        <div className="linguagem">
          <img src="../Images/react-icon.png" alt="" />
          <h2>React.JS</h2>
        </div>
        <div className="linguagem">
          <img src="../Images/nest-icon.png" alt="" />
          <h2>NestJS</h2>
        </div>
        <div className="linguagem">
          <img src="../Images/python-icon.png" alt="" />
          <h2>Python</h2>
        </div>
        <div className="linguagem">
          <img src="../Images/js-icon.png" alt="" />
          <h2>JavaScript</h2>
        </div>
        <div className="linguagem">
          <img src="../Images/html-icon.png" alt="" />
          <h2>HTML</h2>
        </div>
        <div className="linguagem">
          <img src="../Images/css-icon.png" alt="" />
          <h2>CSS</h2>
        </div>
        <div className="linguagem">
          <img src="../Images/nodejs-icon.png" alt="" />
          <h2>Node.JS</h2>
        </div>
        <div className="linguagem">
          <img src="../Images/sql-icon.png" alt="" />
          <h2>MySQL</h2>
        </div>
        <div className="linguagem">
          <img src="../Images/postgress-icon.png" alt="" />
          <h2>PostgreSQL</h2>
        </div>
        <div className="linguagem">
          <img src="../Images/mongo-icon.png" alt="" />
          <h2>Mongo DB</h2>
        </div>
        <div className="linguagem">
          <img src="../Images/prisma-icon.png" alt="" />
          <h2>Prisma</h2>
        </div>
      </div>

      <div className="separation-line gap"></div>

      <Credits />
    </div>
  );
};

export default AboutMe;
