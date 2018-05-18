import React from 'react';
import { AnimatedText } from '../../shared';

// STYLES
import './Registry.style.css';
const tree = require('../../../assets/images/logo/Tree.svg');

//=========================
// COMPONENT
//=========================
const Registry = () => {
  return (
    <div className="Registry__container">
      <div className="Registry__title">
        <h1>Registery</h1>
      </div>
      <AnimatedText>
        <div className="Registry__text">
          <p>
            Having all of our family and friends come and spend the weekend with us is more than enough of a wedding
            present. But if you must, below are places where we are registered. You’ll notice that the only option is
            for gift cards, as we have no room to put extra things at the moment!
          </p>
        </div>
      </AnimatedText>
      <img src={tree} alt={'Tree Logo'} height={32} style={{ padding: '30px' }} />
    </div>
  );
};

//=========================
// EXPORTS
//=========================
export default Registry;
