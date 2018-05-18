import React from 'react';
import { AnimatedText } from '../../shared';

// STYLES
import './Lodging.style.css';
const tree = require('../../../assets/images/logo/Tree.svg');

//=========================
// COMPONENT
//=========================
const Lodging = () => {
  return (
    <div className="Lodging__container">
      <div className="Lodging__title">
        <h1>Lodging</h1>
      </div>
      <AnimatedText>
        <div className="Lodging__text">
          <p>
            Unfortunately there is not enough room for all of our loved ones at the inn/cabins. So unless you have been
            told that you will be staying at the inn/cabins, we will have to find somewhere for you to sleep! Not to
            worry – there are plenty of close options nearby. And don’t worry about not being on site and having to
            drive – there will be some type of shuttle/transportation service that can take you back to your quarters
            after the festivities.
          </p>
          <p>For those staying at the inn/fish camp cabins:</p>
          <p>Other nearby options:</p>
        </div>
        <div />
      </AnimatedText>
      <img src={tree} alt={'Tree Logo'} height={32} style={{ padding: '30px' }} />
    </div>
  );
};

//=========================
// EXPORTS
//=========================
export default Lodging;
