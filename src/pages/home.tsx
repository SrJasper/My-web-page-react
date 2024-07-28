import { Header } from "../components/header/header";
import React, { useEffect } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Credits from "../components/credits/credits";
import LanguageController from "../components/language/language-controller";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const goToProjectsPage = () => {
    navigate("/projects");
  };

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
