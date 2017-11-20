import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../../constants/route.constants';

//STYLES
import './Header.style.css';

//=========================
// COMPONENT
//=========================
const Header = () => {
    return (
        <div className="header__container">
            <div className="header__nav-container">
                <NavLink className="header__nav-link" to={ routes.REGISTRY }>Registery</NavLink>
                <NavLink className="header__nav-link" to={ routes.ACTIVITIES }>Activities</NavLink>
                <NavLink className="header__nav-link" to={ routes.LODGING }>Lodging</NavLink>                
            </div>
        </div>
    )
}

//=========================
// EXPORTS
//=========================
export default Header;