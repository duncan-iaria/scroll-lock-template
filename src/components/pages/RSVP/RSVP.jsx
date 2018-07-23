import React from 'react';
import { withRouter } from 'react-router-dom';
import { updateGuest } from '../../../api/';
import routes from '../../../constants/route.constants';

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
    const { history } = this.props;

    this.setState({ isLoading: true });
    updateGuest(tGuest)
      .then(updatedGuest => {
        this.setState({ isRsvp: true });
        history.push(routes.CONFIRMATION, { reservedGuest: updatedGuest });
      })
      .catch(tError => {
        console.error(tError);
        this.setState({ error: tError });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { isRsvp, isLoading, error } = this.state;
    return (
      <div className="RSVP__container">
        <div className="RSVP__title">
          <h1>R.S.V.P.</h1>
        </div>
        <img className="spacer" src={flourish} alt={'Spacer Flourish'} />
        <AnimatedText>
          {isLoading ? (
            <p>Updating your reservation...</p>
          ) : isRsvp ? null : (
            <div className="RSVP__text">
              {error ? <p>{error.message} </p> : <p>We'd love to have you...</p>}
              <RSVPForm onRsvp={this.onRsvp} />
            </div>
          )}
        </AnimatedText>
        <img src={mountain} alt={'Mountain Logo'} height={30} style={{ padding: '30px' }} />
      </div>
    );
  }
}

export default withRouter(RSVP);
