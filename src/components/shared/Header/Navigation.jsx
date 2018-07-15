import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../../constants/route.constants';
import HamburgerIcon from './HamburgerIcon';
import NavigationMenu from './NavigationMenu';

// STYLES
import './Navigation.style.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavMenuOpen: false,
    };
  }

  toggleNav = (isOpen = null) => {
    this.setState({
      isNavMenuOpen: isOpen === null ? !this.state.isNavMenuOpen : isOpen,
    });
  };

  render() {
    let { navigationClass } = this.props;
    const { isNavMenuOpen } = this.state;
    const hamburgerColor = navigationClass === 'nav-link landing' ? '#333' : '#f2f0ed';
    return (
      <div className="Navigation__container">
        <HamburgerIcon
          color={hamburgerColor}
          className="Navigation__hamburger-menu"
          onClick={() => this.toggleNav(true)}
        />
        {/* FULL SCREEN NAV MENU */}
        {isNavMenuOpen && (
          <NavigationMenu
            onCloseMenu={() => {
              this.toggleNav(false);
            }}
          />
        )}
        <div className="Navigation__link-container">
          <NavLink className={navigationClass} to={routes.STORY}>
            Story
          </NavLink>
          <span className={navigationClass}>{' — '}</span>
          <NavLink className={navigationClass} to={routes.LODGING}>
            Lodging
          </NavLink>
          <span className={navigationClass}>{' — '}</span>
          <NavLink className={navigationClass} to={routes.ACTIVITIES}>
            Activities
          </NavLink>
          <span className={navigationClass}>{' — '}</span>
          <NavLink className={navigationClass} to={routes.REGISTRY}>
            Registry
          </NavLink>
          <span className={navigationClass}>{' — '}</span>
          <NavLink className={navigationClass} to={routes.RSVP}>
            RSVP
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navigation;
