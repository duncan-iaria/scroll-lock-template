import React from 'react';
import './Navigation.style.css';

const HamburgerIcon = ({ color, className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 252 252" width="32px" height="32px">
        <g
          fill="none"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
        >
          <path d="M0,252v-252h252v252z" fill="none" />
          <g fill={color || '#333333'}>
            <g id="surface1">
              <path d="M31.5,115.5h189v21h-189z" />
              <path d="M31.5,52.5h189v21h-189z" />
              <path d="M31.5,178.5h189v21h-189z" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default HamburgerIcon;
