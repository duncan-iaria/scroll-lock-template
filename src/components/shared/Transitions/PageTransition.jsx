import React from 'react';
import { CSSTransition } from 'react-transition-group'

// STYLE
import './PageTransition.style.css';

const PageTransition = ({ children, ...props }) => {
  return (
    <CSSTransition
      {...props}
      timeout={1000}
      classNames="fade"
    >
      {children}
    </CSSTransition>
  )
}

export default PageTransition;