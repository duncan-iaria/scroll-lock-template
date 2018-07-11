import React from 'react';
import { updateGuest } from '../../../api/';

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
    this.state = {
      isRsvp: false,
      isAttending: false,
      isLoading: false,
    };
  }

  onRsvp = tGuest => {
    this.setState({ isLoading: true });
    updateGuest(tGuest)
      .then(() => {
        this.setState({ isRsvp: true });
      })
      .catch(tError => {
        console.error(tError);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { isRsvp, isLoading } = this.state;
    return (
      <div className="RSVP__container">
        <div className="RSVP__title">
          <h1>R.S.V.P</h1>
        </div>
        <img className="spacer" src={flourish} alt={'Spacer Flourish'} />
        <AnimatedText>
          {isLoading ? (
            <div>loading</div>
          ) : isRsvp ? (
            <div className="RSVP__text">
              <p>See you soon...</p>
            </div>
          ) : (
            <div className="RSVP__text">
              <p>We'd love to have you...</p>
              <RSVPForm onRsvp={this.onRsvp} />
            </div>
          )}
        </AnimatedText>
        <img src={mountain} alt={'Mountain Logo'} height={30} style={{ padding: '30px' }} />
      </div>
    );
  }
}

export default RSVP;
