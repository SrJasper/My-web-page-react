import { useNavigate } from "react-router-dom";
import React from 'react';
import './header.css';

interface Props {
  title: number;
}

const Header: React.FC<Props> = ({ title }) => {

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
      <img className='header-img' src="../../public/Images/profile-pic.png" alt="Profile" />
      
      <div className='header-options'>
        <h1 className={`${title === 1 ? 'green' : ''}`} onClick={goToMainPage}>
          Página inicial
        </h1>
        <h1 className={`${title === 2 ? 'green' : ''}`} onClick={goToMePage}>
          Sobre mim
        </h1>        
        <h1 className={`${title === 3 ? 'green' : ''}`} onClick={goToProjectsPage}>
          Projetos
        </h1>
      </div>
    </div>
  );
};

export {Header};