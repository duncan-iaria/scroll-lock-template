import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../../constants/route.constants';

const Navigation = ({ navigationClass }) => {
  return (
    <div className="nav-container">
      <div style={{ paddingRight: '25px' }}>
        <NavLink className={navigationClass} to={routes.STORY}>
          Story
        </NavLink>
        <span className={navigationClass}>{'  —  '}</span>
        <NavLink className={navigationClass} to={routes.LODGING}>
          Lodging
        </NavLink>
        <span className={navigationClass}>{'  —  '}</span>
        <NavLink className={navigationClass} to={routes.REGISTRY}>
          Registery
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
