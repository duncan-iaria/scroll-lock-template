import React from 'react';
import { debounce } from 'lodash';
import { searchGuests, updateGuest } from '../../../api/GuestAPI';
import { InputCheckbox, InputSelect, DropdownSelect } from '../../shared/';

// STYLES
import './RSVPForm.style.css';

class RSVPForm extends React.Component {
  constructor(props) {
    super(props);
    console.log('rvsp form reconstruct');
    this.state = {
      selectedGuest: null,
      isRSVP: false,
      isLoading: false,
    };

    this.guests = [
      { id: 1, name: 'duncan', isAttending: false, isPlusOne: true, maxGuests: 4, guestsAttending: 1 },
      { id: 2, name: 'rhi', isAttending: false, isPlusOne: true, maxGuests: 2, guestsAttending: 1 },
      { id: 3, name: 'nick', isAttending: false, isPlusOne: false, maxGuests: 1, guestsAttending: 1 },
    ];

    this.getGuest = debounce(this.getGuest, 250);
    this.getMaxGuests = this.getMaxGuests.bind(this);
  }

  updateField = tEvent => {
    tEvent.preventDefault();
    const { name, value } = tEvent.target;
    if (value === 'true' || value === 'false') {
      this.setState({
        selectedGuest: {
          ...this.state.selectedGuest,
          [name]: !(value === 'true'),
        },
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

  getGuest = async () => {
    const { name } = this.state;
    let guests;

    this.setState({ isLoading: true });
    const tempResponse = await searchGuests(name);
    console.log(tempResponse);
    if (tempResponse) {
      guests = tempResponse.map(tempGuest => {
        return {
          id: tempGuest._id,
          name: tempGuest.displayName,
        };
      });
    }

    this.setState({ guests, isLoading: false });
    console.log(tempResponse);
  };

  getMaxGuests = maxGuests => {
    const { selectedGuest } = this.state;

    let guestArray = [];
    for (let i = 1; i <= maxGuests; i++) {
      guestArray.push({ name: i, value: i });
    }
    return guestArray;
  };

  onSelectGuest = tGuest => {
    console.log('top level select: ', tGuest);
    this.setState({ selectedGuest: tGuest });
  };

  selectGuestAttendance = ({ value: tNumberAttending }) => {
    const { selectedGuest } = this.state;
    this.setState({ selectedGuest: { ...selectedGuest, guestsAttending: tNumberAttending } });
  };

  clearGuest = () => {
    this.setState({ selectedGuest: null });
  };

  onSubmit = tEvent => {
    const { selectedGuest } = this.state;
    tEvent.preventDefault();
    console.log('current guest info', selectedGuest);
    updateGuest(selectedGuest);
    this.setState({ isRSVP: true });
  };

  render() {
    const { selectedGuest, isRSVP } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="RSVPForm__form">
        <div className="RSVPForm__input-row">
          <InputSelect
            initialOptions={this.guests}
            getOptions={this.getGuest}
            selectItem={this.onSelectGuest}
            selectedOption={selectedGuest}
            clearSelection={this.clearGuest}
            isLoading={this.isLoading}
            onUpdateField={this.updateField}
            placeholder="Your name, please"
          />
        </div>
        {selectedGuest ? (
          <div>
            <div className="RSVPForm__input-row">
              <InputCheckbox
                name="isAttending"
                label="Attending!"
                value={selectedGuest.isAttending}
                onClick={this.updateField}
              />
              <InputCheckbox
                name="isAttending"
                label="Regretfully Decline."
                value={!selectedGuest.isAttending}
                onClick={tEvent => {
                  tEvent.target.value = !!selectedGuest.isAttending;
                  this.updateField(tEvent);
                }}
              />
            </div>
            {selectedGuest &&
              selectedGuest.maxGuests > 1 && (
                <div className="RSVPForm__input-row">
                  <DropdownSelect
                    label="Guests in Attendance"
                    selectedValue={selectedGuest.guestsAttending}
                    selectOption={this.selectGuestAttendance}
                    options={this.getMaxGuests(selectedGuest.maxGuests)}
                  />
                </div>
              )}
            <div className="RSVPForm__input-row">
              <input style={{ alignSelf: 'flex-end' }} type="submit" value="RSVP" />
            </div>
          </div>
        ) : null}
      </form>
    );
  }
}

export default RSVPForm;
