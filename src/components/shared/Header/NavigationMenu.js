import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../../constants/route.constants';

import './Navigation.style.css';

const NavigationMenu = ({ onCloseMenu }) => {
  return (
    <div className="NavigationMenu__background" onClick={onCloseMenu}>
      <div className="NavigationMenu__link-container">
        <NavLink className="NavigationMenu__link" to={routes.STORY}>
          Story
        </NavLink>
        <NavLink className="NavigationMenu__link" to={routes.LODGING}>
          Lodging
        </NavLink>
        <NavLink className="NavigationMenu__link" to={routes.ACTIVITIES}>
          Activities
        </NavLink>
        <NavLink className="NavigationMenu__link" to={routes.REGISTRY}>
          Registry
        </NavLink>
        <NavLink className="NavigationMenu__link" to={routes.RSVP}>
          RSVP
        </NavLink>
      </div>
    </div>
  );
};

export default NavigationMenu;
