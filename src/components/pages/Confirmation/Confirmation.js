import React from 'react';
import { withRouter } from 'react-router-dom';
import { AnimatedText } from '../../shared';

// STYLES
import './Confirmation.style.css';
const flourish = require('../../../assets/images/logo/Flourish.svg');

class Confirmation extends React.PureComponent {
  getRsvpMessage = tGuest => {
    if (tGuest.isWeddingRsvp) {
      return (
        <p>
          We're very excited that you can make it! If you have any questions don't hesitate to contact Duncan or
          Rhiannon.
        </p>
      );
    } else if (tGuest.isWelcomeRsvp) {
      return <p>We're sorry you can't make it to the ceremony, but we can't wait to see you at the welcome dinner.</p>;
    } else {
      return <p>We're bummed you can't make it, but we understand. Let's hang out soon!</p>;
    }
  };

  render() {
    const { reservedGuest } = this.props.location.state || { reservedGuest: { displayName: null } };
    return (
      <div className="Confirmation__container">
        <div className="Confirmation__title">
          <h1>R.S.V.P. Received!</h1>
        </div>
        <img className="spacer" src={flourish} alt={'Spacer Flourish'} />
        <AnimatedText>
          {reservedGuest.displayName ? (
            <div className="Confirmation__text">
              <p>{`Thank you for your response, ${reservedGuest.displayName}.`}</p>
              {this.getRsvpMessage(reservedGuest)}
            </div>
          ) : (
            <div className="Confirmation__text">
              <p>
                Did you directly navigate here? You tricky person, you. Go back and RSVP the correct way, why dontcha?!
              </p>
            </div>
          )}
        </AnimatedText>
      </div>
    );
  }
}

export default withRouter(Confirmation);
