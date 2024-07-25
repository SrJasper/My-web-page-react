import { Header } from "../components/header/header";
import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Credits from "../components/credits/credits";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const goToProjectsPage = () => {
    navigate("/projects");
  };

  return (
    <div>
      <Header title={1} />

      <div className="title">
        <h1>Transformando linhas de</h1>
        <h1>código em soluções</h1>
        <h1>inovadoras e funcionais.</h1>
      </div>

      <div className="container-main-options">
        <div>
          <img
            src="../../public/Images/guy-Icon.png"
            alt=""
            className="page-image"
          />
          <label className="page-text">sobre mim</label>
        </div>
        <div className="hover" onClick={goToProjectsPage}>
          <img src="../../public/Images/pc.png" alt="" className="page-image" />
          <label className="page-text">Projetos</label>
        </div>
        <div>
          <img
            src="../../public/Images/Contact.png"
            alt=""
            className="page-image"
          />
          <label className="page-text">Contato</label>
        </div>
      </div>

      <div className="gap-space"></div>

      <Credits />
    </div>
  );
};

export default Home;
