import React from 'react';
import './credits.css';

const Credits: React.FC = () => {
  return (
    <div className="credits">
      <h2>
        Made by Leonardo Fonseca
      </h2>
        <div className="credits-icons">
          <img
            src="../../public/Images/IG.png"
            onClick={() => {
              window.open("https://www.instagram.com/leogranjadev/", "_blank");
            }}
          />
          <img
            src="../../public/Images/linkedin-logo.png"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/leonardo-fonseca-97565326b/",
                "_blank"
              );
            }}
          />
          <img
            src="../../public/Images/Wpp.png"
            onClick={() => {
              window.open("https://wa.me/5512997772296", "_blank");
            }}
          />
          <img
            src="../../public/Images/Github.png"
            onClick={() => {
              window.open("https://github.com/SrJasper", "_blank");
            }}
          />
          <img
            src="../../public/Images/CV.png"
            onClick={() => {
              window.open(
                "https://drive.google.com/drive/folders/1jyQVl4xYsjufltCrIHQugWa3Qd6nuwzv?usp=sharing",
                "_blank"
              );
            }}
          />
        </div>
      </div>
  );
};

export default Credits;