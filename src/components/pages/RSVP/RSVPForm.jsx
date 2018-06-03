import React from 'react';
import { debounce } from 'lodash';
import { searchGuests } from '../../../api/GuestAPI';
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
    let guestArray = [];
    for (let i = 1; i < maxGuests; i++) {
      guestArray.push({ name: i, value: i });
    }
    console.log('max guests array:', guestArray);
    return guestArray;
  };

  onSelectGuest = tGuest => {
    console.log('top level select: ', tGuest);
    this.setState({ selectedGuest: tGuest });
  };

  selectGuestAttendance = () => {
    console.log('hey guest attendance selected');
  };

  clearGuest = () => {
    this.setState({ selectedGuest: null });
  };

  onSubmit = tEvent => {
    const { selectedGuest } = this.state;
    tEvent.preventDefault();
    console.log('current guest info', selectedGuest);
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
                  tEvent.target.value = !selectedGuest.isAttending;
                  this.updateField(tEvent);
                }}
              />
              <DropdownSelect selectValue={2} />
              {selectedGuest.isPlusOne ? (
                <InputCheckbox
                  name="isPlusOne"
                  label="Plus One?"
                  value={selectedGuest.isPlusOne}
                  onClick={this.updateField}
                />
              ) : null}
            </div>
            <input type="submit" value="RSVP" />
          </div>
        ) : null}
      </form>
    );
  }
}

export default RSVPForm;
