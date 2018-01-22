import React from 'react';
import { CSSTransition } from 'react-transition-group'

// STYLE
import './PageTransition.style.css';

const PageTransition = ({ children, duration, animationClass, ...props }) => {
  return (
    <CSSTransition
      {...props}
      timeout={duration}
      classNames={animationClass}
    >
      {children}
    </CSSTransition>
  )
}

export default PageTransition;