import React from "react";
import "./aboutMe.css";
import { Header } from "../components/header/header";
import Credits from "../components/credits/credits";

const AboutMe: React.FC = () => {
  return (
    <div>
      <Header title={2} />

      <div className="title-about-me">
        <h1>Sobre mim.</h1>
      </div>

      <div className="separation-line"></div>

      <div className="SM-bg">
        <div className="SM-text-field">
          <div id="texto-animado" className="SM-texto">
            {/* <!-- TEXTOOOOO --> */}
          </div>
          <div id="texto2-animado" className="SM-texto">
            {/* <!-- TEXTOOOOO --> */}
          </div>
        </div>
      </div>

      <div className="linguagens-texto">Tecnologias em que desenvolvo.</div>

      <div className="linguagens-grid">
        <div className="linguagem">
          <div className="lg-img">
            <img src="../Images/ts-icon.png" alt="" />
          </div>
          <div className="lg-nome">TypeScript</div>
        </div>
        <div className="linguagem">
          <div className="lg-img">
            <img src="../Images/react-icon.png" alt="" />
          </div>
          <div className="lg-nome">React.JS</div>
        </div>
        <div className="linguagem">
          <div className="lg-img">
            <img src="../Images/nest-icon.png" alt="" />
          </div>
          <div className="lg-nome">NestJS</div>
        </div>
        <div className="linguagem">
          <div className="lg-img">
            <img src="../Images/python-icon.png" alt="" />
          </div>
          <div className="lg-nome">Python</div>
        </div>
        <div className="linguagem">
          <div className="lg-img">
            <img src="../Images/js-icon.png" alt="" />
          </div>
          <div className="lg-nome">JavaScript</div>
        </div>
        <div className="linguagem">
          <div className="lg-img">
            <img src="../Images/html-icon.png" alt="" />
          </div>
          <div className="lg-nome">HTML</div>
        </div>
        <div className="linguagem">
          <div className="lg-img">
            <img src="../Images/css-icon.png" alt="" />
          </div>
          <div className="lg-nome">CSS</div>
        </div>
        <div className="linguagem">
          <div className="lg-img">
            <img src="../Images/nodejs-icon.png" alt="" />
          </div>
          <div className="lg-nome">Node.JS</div>
        </div>
        <div className="linguagem">
          <div className="lg-img">
            <img src="../Images/sql-icon.png" alt="" />
          </div>
          <div className="lg-nome">MySQL</div>
        </div>
        <div className="linguagem">
          <div className="lg-img">
            <img src="../Images/postgress-icon.png" alt="" />
          </div>
          <div className="lg-nome">PostgreSQL</div>
        </div>
        <div className="linguagem">
          <div className="lg-img">
            <img src="../Images/mongo-icon.png" alt="" />
          </div>
          <div className="lg-nome">Mongo DB</div>
        </div>
        <div className="linguagem">
          <div className="lg-img">
            <img src="../Images/prisma-icon.png" alt="" />
          </div>
          <div className="lg-nome">Prisma</div>
        </div>
      </div>

      <div className="separation-line gap"></div>

      <Credits />
    </div>
  );
};

export default AboutMe;
