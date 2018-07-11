import React from 'react';

//STYLE
import './AnimatedText.style.css';

//=========================
// COMPONENT
//=========================
const AnimatedText = ({ children, isDelay = true }) => {
  const tempStyle = isDelay ? 'animated-text__text--delayed' : 'animated-text__text';
  return <div className={tempStyle}>{children}</div>;
};

//=========================
// EXPORT
//=========================
export default AnimatedText;
