import React, { useEffect } from "react";
import "./projects.css";
import { Header } from "../components/header/header";
import Credits from "../components/credits/credits";

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <Header title={3} />

      <div className="title">
        <h1>Meus projetos.</h1>
      </div>

      <div className="projects-presentation">
        <p>
          Explorando a paixão pelo desenvolvimento, busco constantemente
          aprimorar minhas habilidades. Confira meus projetos recentes para
          testemunhar meu compromisso em evoluir como desenvolvedor.
        </p>
        <p> Clique no projeto que te interessar para acessá-lo!</p>
      </div>

      <div className="separation-line"></div>

      <div className="project-tab">
        <img src="../../public/Images/stocks.png" alt="stck" />
        <div className="project-description">
          <h2>Registro de ações</h2>
          <p>
            Nesse projeto optei por aplicar as tecnologias mais modernas do
            mercado, utilizando TypeScript em todo o seu desenvolvimento. No
            lado do servidor, optei utilizar o framework NestJS, conhecido por
            sua escalabilidade e estrutura modularizada. Para a comunicação com
            o banco de dados, escolhi o Prisma, que oferece uma interface segura
            e prática. O banco de dados PostgreSQL foi selecionado por sua
            confiabilidade e desempenho. Quanto à hospedagem, optou-se por
            utilizar o serviço Neon para o banco de dados PostgreSQL. Para o
            front-end usei o a biblioteca React para me dar versatilidade e
            praticidade na estruturação das páginas.
          </p>
        </div>
      </div>

      <div className="separation-line"></div>

      <div className="project-tab">
        <img src="../../public/Images/store.png" alt="stre" />
        <div className="project-description">
          <h2>Estoque</h2>
          <p>
            No projeto de estoque, utilizei nodeJS, MySQL e hospedei, tanto o
            banco de dados quanto o próprio servidor, na AWS
          </p>
        </div>
      </div>

      <div className="separation-line"></div>

      <div className="project-tab">
        <img src="../../public/Images/task.png" alt="task" />

        <div className="project-description">
          <h2>Organizador de tarefas</h2>
          <p>
            Desenvolvi um organizador de tarefas intuitivo e versátil,
            utilizando HTML, CSS e JavaScript. Os usuários podem gerenciar suas
            tarefas de forma eficiente, adicionando, removendo e marcando
            tarefas concluídas em uma interface amigável e funcional.
          </p>
        </div>
      </div>

      <div className="separation-line"></div>

      <div className="project-tab">
        <img src="../../public/Images/calc.png" alt="calc" />
        <div className="project-description">
          <h2>Calculadora</h2>
          <p>
            Criei uma calculadora funcional. Esta aplicação combina
            desenvolvimento HTML, CSS e Lógica JavaScript, demonstrando meu
            domínio das tecnologias web. Explore a simplicidade e eficiência
            desta calculadora desenvolvida com paixão e habilidade.
          </p>
        </div>
      </div>

      <div className="separation-line"></div>

      <div className="project-tab">
        <img src="../../public/Images/jet.png" alt="jet" />

        <div className="project-description">
          <h2>JeT</h2>
          <p>
            Conheça o JeT: um aplicativo Python criado para simplificar a
            organização de Jogos entre Amigos. Com apenas alguns cliques, o
            aplicativo distribui os participantes em equipes de forma aleatória,
            formando as equipes automáticamente.
          </p>
        </div>
      </div>

      <div className="separation-line"></div>

      <Credits />
    </div>
  );
};

export default ProjectsPage;
