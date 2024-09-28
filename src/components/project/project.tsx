import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  projectTitle: string;
  link: string;
}

const Project: React.FC<Props> = ({ projectTitle, link }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="project-tab">
        <img
          onClick={() => {
            window.open(`${link}`, "StockPage");
          }}
          src= {`../../../assets/projects/${projectTitle}.png`}
          alt="stck"
          />
        <div className="project-description">
          <h2>{t(`${projectTitle}-title`)}</h2>
          <p>{t(`${projectTitle}-text`)}</p>
        </div>
      </div>
      <div className="separation-line"></div>
    </>
  );
};

export default Project;