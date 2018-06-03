import React from 'react';

// COMPONENTS
import { AnimatedText } from '../../shared';
import RSVPForm from './RSVPForm';

// STYLES
import './RSVP.style.css';
const mountain = require('../../../assets/images/logo/ThinMountains.svg');
const flourish = require('../../../assets/images/logo/Flourish.svg');

class RSVP extends React.Component {
  constructor(props) {
    super(props);
  }

  submitRSVP = tEvent => {
    tEvent.preventDefault();
    console.log(tEvent.target.name);
    console.log(tEvent.target.value);
  };

  render() {
    return (
      <div className="RSVP__container">
        <div className="RSVP__title">
          <h1>R.S.V.P</h1>
        </div>
        <img className="spacer" src={flourish} alt={'Spacer Flourish'} />
        <AnimatedText>
          <div className="RSVP__text">
            <p>We'd love to have you...</p>
            <RSVPForm />
          </div>
        </AnimatedText>
        <img src={mountain} alt={'Mountain Logo'} height={30} style={{ padding: '30px' }} />
      </div>
    );
  }
}

export default RSVP;
