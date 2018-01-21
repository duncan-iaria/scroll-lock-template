import React from 'react';
import { CSSTransition } from 'react-transition-group'

// STYLE
import './PageTransition.style.css';

const PageTransition = ({ children, duration, ...props }) => {
  return (
    <CSSTransition
      {...props}
      timeout={duration}
      classNames="fade"
    >
      {children}
    </CSSTransition>
  )
}

export default PageTransition;