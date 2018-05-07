import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import routes from '../../../constants/route.constants';

// COMPONENTS
import Navigation from './Navigation';

// STYLES
import './Header.style.css';

const logo = require('../../../assets/images/logo/FoxHead.svg');

//=========================
// COMPONENT
//=========================
const Header = ({ location: { pathname } }) => {
  const tempStyle = pathname === '/' ? 'landing' : '';
  return (
    <div className={`Header__container ${tempStyle}`}>
      <div className="Header__spacer" />

      {/* LOGO */}
      <div className="Header__logo-container">
        <NavLink to={routes.LANDING}>
          <img className={`Header__logo ${tempStyle}`} src={logo} alt={'fox head'} />
        </NavLink>
      </div>

      {/* NAV */}
      <Navigation navigationClass={`nav-link ${tempStyle}`} />
    </div>
  );
};

//=========================
// EXPORTS
//=========================
export default withRouter(Header);
