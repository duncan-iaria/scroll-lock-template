import React from 'react';
import { debounce } from 'lodash';
import { searchGuests } from '../../../api/GuestAPI';
import { InputCheckbox, InputSelect, DropdownSelect, AnimatedText } from '../../shared/';

// STYLES
import './RSVPForm.style.css';

class RSVPForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      selectedGuest: null,
      isLoading: false,
      guests: [],
    };

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

  updateSelect = tEvent => {
    tEvent.preventDefault();
    const { name, value } = tEvent.target;
    this.setState({ [name]: value }, this.getGuest);
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
          ...tempGuest,
        };
      });
    }

    this.setState({ guests, isLoading: false });
    console.log(tempResponse);
  };

  getMaxGuests = maxGuestCount => {
    let guestArray = [];
    for (let i = 1; i <= maxGuestCount; i++) {
      guestArray.push({ name: i, value: i });
    }
    return guestArray;
  };

  onSelectGuest = tGuest => {
    this.setState({ selectedGuest: tGuest });
  };

  selectGuestAttendance = ({ name, value: tNumberAttending }) => {
    const { selectedGuest } = this.state;
    console.log('name:', name);
    this.setState({ selectedGuest: { ...selectedGuest, [name]: tNumberAttending } });
  };

  clearGuest = () => {
    this.setState({ selectedGuest: null });
  };

  render() {
    const { selectedGuest, isLoading, name, guests } = this.state;
    const { onRsvp } = this.props;
    return (
      <form
        onSubmit={tEvent => {
          tEvent.preventDefault();
          onRsvp(selectedGuest);
        }}
        className="RSVPForm__form"
      >
        <div className="RSVPForm__input-section">
          <div className="RSVPForm__input-row">
            <InputSelect
              value={name}
              name="name"
              options={guests}
              updateField={this.updateSelect}
              selectItem={this.onSelectGuest}
              selectedOption={selectedGuest}
              clearSelection={this.clearGuest}
              isLoading={isLoading}
              placeholder="Your name, please..."
            />
          </div>
        </div>
        {selectedGuest ? (
          <AnimatedText isDelay={false}>
            <div className="RSVPForm__input-section">
              <div className="RSVPForm__input-row">
                <div className="RSVPForm__label">Wedding Ceremony</div>
              </div>
              <div className="RSVPForm__input-row">
                <InputCheckbox
                  name="isWeddingRsvp"
                  label="Attending!"
                  value={selectedGuest.isWeddingRsvp}
                  onClick={tEvent => {
                    tEvent.target.value = !!selectedGuest.isWeddingRsvp;
                    this.updateField(tEvent);
                  }}
                />
                <InputCheckbox
                  name="isWeddingRsvp"
                  label="Regretfully Decline."
                  value={!selectedGuest.isWeddingRsvp}
                  onClick={tEvent => {
                    tEvent.target.value = !!selectedGuest.isWeddingRsvp;
                    this.updateField(tEvent);
                  }}
                />
              </div>
              {selectedGuest.isWeddingRsvp &&
                selectedGuest.maxGuestCount > 1 && (
                  <div className="RSVPForm__input-row">
                    <DropdownSelect
                      name="attendingWeddingGuestCount"
                      label="Guests in Attendance"
                      selectedValue={selectedGuest.attendingWeddingGuestCount}
                      selectOption={this.selectGuestAttendance}
                      options={this.getMaxGuests(selectedGuest.maxGuestCount)}
                    />
                  </div>
                )}
            </div>
            <div className="RSVPForm__input-section">
              <div className="RSVPForm__input-row">
                <div className="RSVPForm__label">Welcome Dinner</div>
              </div>
              <div className="RSVPForm__input-row">
                <InputCheckbox
                  name="isWelcomeRsvp"
                  label="Attending!"
                  value={selectedGuest.isWelcomeRsvp}
                  onClick={tEvent => {
                    tEvent.target.value = !!selectedGuest.isWelcomeRsvp;
                    this.updateField(tEvent);
                  }}
                />
                <InputCheckbox
                  name="isWelcomeRsvp"
                  label="Regretfully Decline."
                  value={!selectedGuest.isWelcomeRsvp}
                  onClick={tEvent => {
                    tEvent.target.value = !!selectedGuest.isWelcomeRsvp;
                    this.updateField(tEvent);
                  }}
                />
              </div>
              {selectedGuest.isWelcomeRsvp &&
                selectedGuest.maxGuestCount > 1 && (
                  <div className="RSVPForm__input-row">
                    <DropdownSelect
                      name="attendingWelcomeGuestCount"
                      label="Guests in Attendance"
                      selectedValue={selectedGuest.attendingWelcomeGuestCount}
                      selectOption={this.selectGuestAttendance}
                      options={this.getMaxGuests(selectedGuest.maxGuestCount)}
                    />
                  </div>
                )}
            </div>
            <div className="RSVPForm__input-row">
              <input type="submit" value="RSVP" />
            </div>
          </AnimatedText>
        ) : null}
      </form>
    );
  }
}

export default RSVPForm;
