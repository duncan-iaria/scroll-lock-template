import React from 'react';
import { AnimatedText } from '../../shared';

// STYLES
import './Confirmation.style.css';
const flourish = require('../../../assets/images/logo/Flourish.svg');

class Confirmation extends React.PureComponent {
  render() {
    const { reservedGuest } = this.props.location.state || { reservedGuest: { displayName: null } };
    console.log('resservedGuest — ', reservedGuest);
    return (
      <div className="Confirmation__container">
        <div className="Confirmation__title">
          <h1>R.S.V.P. Received!</h1>
        </div>
        <img className="spacer" src={flourish} alt={'Spacer Flourish'} />
        <div className="Confirmation__text">
          <p>{`Thank you for your response, ${reservedGuest.displayName}`}</p>
        </div>
        {reservedGuest ? (
          <div className="Confirmation__text">
            <p>We can't wait to see you.</p>
          </div>
        ) : (
          <div className="Confirmation__text">
            <p>how did you get here?</p>
          </div>
        )}
      </div>
    );
  }
}

export default Confirmation;
