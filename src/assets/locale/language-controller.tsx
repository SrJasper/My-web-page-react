import React, { useEffect} from 'react';
import './lg-controller.css';

type Prop = {
  handleClose: () => void;
}

const LanguageController: React.FC<Prop> = ({
  handleClose,
}) => {

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  useEffect(()=>{
    console.log("Languages: ", localStorage.getItem("lng"));
  },[localStorage.getItem("lng")]);

  return (
    <>     
      <div className='language-page'></div>
      
      <div className='language-options'>

        <button
          className='en-button-menu'
          onClick={() => {
            localStorage.setItem("lng", "en");
            handleClose()
          }}
          >
          english
        </button>
      

        <button
          className='pt-button-menu'
          onClick={() => {
            localStorage.setItem("lng", "pt");
            handleClose()
          }}
          >
          português
        </button>

      </div>
    </>
  );
};

export default LanguageController;