import React from 'react';

// COMPONENTS
import { AnimatedText } from '../../shared';
import RSVPForm from './RSVPForm';

// STYLES
import './RSVP.style.css';
const mountain = require('../../../assets/images/logo/ThinMountains.svg');
const flourish = require('../../../assets/images/logo/Flourish.svg');

//=========================
// COMPONENT
//=========================
class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      isAttending: false,
      isPlusOne: false,
    };
  }

  updateField = tEvent => {
    console.log(tEvent.target.name);
    console.log(tEvent.target.value);
  };

  submitRSVP = tEvent => {
    tEvent.preventDefault();
    console.log(tEvent.target.name);
    console.log(tEvent.target.value);
  };

  // VIEW
  render() {
    const { name, isAttending, isPlusOne } = this.state;
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
            />
          </div>
        </AnimatedText>
        <img src={mountain} alt={'Mountain Logo'} height={30} style={{ padding: '30px' }} />
      </div>
    );
  }
}
//=========================
// EXPORTS
//=========================
export default RSVP;
