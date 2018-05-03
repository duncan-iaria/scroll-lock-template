import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import routes from '../../../constants/route.constants';

//STYLES
import './Header.style.css';

//=========================
// COMPONENT
//=========================
const Header = ({ location: { pathname } }) => {
  const tempLinkStyle = pathname === '/' ? 'nav-link landing' : 'nav-link';
  return (
    <div className="Header__container">
      <div className="nav-container">
        <NavLink className={tempLinkStyle} to={routes.REGISTRY}>
          Registery
        </NavLink>
        <span className={tempLinkStyle}>{'  —  '}</span>
        <NavLink className={tempLinkStyle} to={routes.ACTIVITIES}>
          Activities
        </NavLink>
        <span className={tempLinkStyle}>{'  —  '}</span>
        <NavLink className={tempLinkStyle} to={routes.LODGING}>
          Lodging
        </NavLink>
      </div>
    </div>
  );
};

//=========================
// EXPORTS
//=========================
export default withRouter(Header);
