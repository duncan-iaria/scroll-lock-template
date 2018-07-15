import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../../constants/route.constants';

// STYLES
import './Navigation.style.css';

const Navigation = ({ navigationClass }) => {
  return (
    <div className="Navigation__container">
      <div className="Navigation__link-container">
        <NavLink className={navigationClass} to={routes.STORY}>
          Story
        </NavLink>
        <span className={navigationClass}>{'  —  '}</span>
        <NavLink className={navigationClass} to={routes.LODGING}>
          Lodging
        </NavLink>
        <span className={navigationClass}>{'  —  '}</span>
        <NavLink className={navigationClass} to={routes.REGISTRY}>
          Registry
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
