import React, { Component } from 'react';
import { getAllGuests } from '../../../api/';
import GuestList from './GuestList';

// STYLES
import './GuestList.style.css';
const flourish = require('../../../assets/images/logo/Flourish.svg');
const mountain = require('../../../assets/images/logo/ThinMountains.svg');

class GuestListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalWeddingCount: 0,
      totalWelcomeCount: 0,
      attendingWeddingGuests: [],
      attendingWelcomeGuests: [],
      notRespondedGuests: [],
      notAttendingGuests: [],
    };
  }

  async componentDidMount() {
    const tempGuests = await getAllGuests();
    this.setState({ ...tempGuests });
  }

  render() {
    const {
      totalWeddingCount,
      totalWelcomeCount,
      attendingWeddingGuests,
      attendingWelcomeGuests,
      notAttendingGuests,
      notRespondedGuests,
    } = this.state;
    return (
      <div className="GuestList__container">
        <div className="GuestList__title">Guest List</div>
        <img className="spacer" src={flourish} alt={'Spacer Flourish'} />

        <div className="GuestList__text">
          <div className="GuestList_totals">
            <div>Total Wedding Guests: {totalWeddingCount}</div>
            <div>Total Welcome Dinner Guests: {totalWelcomeCount}</div>
          </div>

          <GuestList guests={attendingWeddingGuests} title="Attending Wedding Guests" />
          <GuestList guests={attendingWelcomeGuests} title="Attending Welcome Dinner" />
          <GuestList guests={notAttendingGuests} title="Not Attending" />
          <GuestList guests={notRespondedGuests} title="Not Responded" />
        </div>
        <img src={mountain} alt={'Mountain Logo'} height={32} style={{ padding: '30px' }} />
        <div />
      </div>
    );
  }
}

export default GuestListContainer;
