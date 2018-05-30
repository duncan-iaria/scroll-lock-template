import React from 'react';
import { debounce } from 'lodash';

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
      id: 0,
      name: '',
      isAttending: false,
      isPlusOne: false,
      isLoading: false,
    };

    this.getGuest = debounce(this.getGuest, 250);
  }

  updateField = tEvent => {
    tEvent.preventDefault();
    const { name, value } = tEvent.target;
    if (value === 'true' || value === 'false') {
      this.setState({
        [name]: !(value === 'true'),
      });
    } else {
      this.setState({
        [name]: value,
      });

      if (name === 'name') {
        this.getGuest();
      }
    }
  };

  getGuest = () => {
    const { name } = this.state;
    this.setState({ isLoading: true });
  };

  submitRSVP = tEvent => {
    tEvent.preventDefault();
    console.log(tEvent.target.name);
    console.log(tEvent.target.value);
  };

  render() {
    const { name, isAttending, isPlusOne, isLoading } = this.state;
    return (
      <div className="RSVP__container">
        <div className="RSVP__title">
          <h1>R.S.V.P</h1>
        </div>
        <img className="spacer" src={flourish} alt={'Spacer Flourish'} />
        <AnimatedText>
          <div className="RSVP__text">
            <p>We'd love to have you...</p>
            <RSVPForm
              name={name}
              isAttending={isAttending}
              isPlusOne={isPlusOne}
              onUpdateField={this.updateField}
              onSubmit={this.submitRSVP}
              isLoading={isLoading}
            />
          </div>
        </AnimatedText>
        <img src={mountain} alt={'Mountain Logo'} height={30} style={{ padding: '30px' }} />
      </div>
    );
  }
}

export default RSVP;
