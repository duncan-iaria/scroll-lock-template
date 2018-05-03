import React from 'react';
import AnimatedText from '../../shared/AnimatedText/AnimatedText';
//STYLES
import './Landing.style.css';
const logo = require('../../../assets/images/logo/FullFox@2x.png');

//=========================
// COMPONENT
//=========================
const Landing = () => {
  return (
    <div className="landing__container">
      <div className="landing__title">
        <AnimatedText>
          <img src={logo} alt={'Rhiannon and Duncan Logo'} />
        </AnimatedText>
      </div>
      <div className="landing__footer">
        <div className="landing__footer_text">10.27.2018</div>
      </div>
    </div>
  );
};

//=========================
// EXPORTS
//=========================
export default Landing;
