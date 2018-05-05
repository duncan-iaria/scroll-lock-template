import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import routes from '../../../constants/route.constants';

//STYLES
import './Header.style.css';

const logo = require('../../../assets/images/logo/FoxHead.svg');

//=========================
// COMPONENT
//=========================
const Header = ({ location: { pathname } }) => {
  const tempStyle = pathname === '/' ? 'landing' : '';
  return (
    <div className={`Header__container ${tempStyle}`}>
      <div style={{ flex: 1 }} />

      {/* LOGO */}
      <NavLink to={routes.LANDING}>
        <img className={`Header__logo ${tempStyle}`} src={logo} alt={'fox head'} />
      </NavLink>

      {/* NAV */}
      <div className="nav-container">
        <NavLink className={`nav-link ${tempStyle}`} to={routes.REGISTRY}>
          Registery
        </NavLink>
        <span className={`nav-link ${tempStyle}`}>{'  —  '}</span>
        <NavLink className={`nav-link ${tempStyle}`} to={routes.ACTIVITIES}>
          Activities
        </NavLink>
        <span className={`nav-link ${tempStyle}`}>{'  —  '}</span>
        <NavLink className={`nav-link ${tempStyle}`} to={routes.LODGING}>
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
