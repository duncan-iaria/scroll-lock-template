import React from 'react';
import { debounce } from 'lodash';
import { searchGuests } from '../../../api/GuestAPI';
import { InputCheckbox, InputSelect } from '../../shared/';

// STYLES
import './RSVPForm.style.css';

class RSVPForm extends React.Component {
  constructor(props) {
    super(props);
    console.log('rvsp form reconstruct');
    this.state = {
      selectedGuest: null,
      isLoading: false,
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

  onSelectGuest = tGuest => {
    console.log('top level select: ', tGuest);
    this.setState({ selectedGuest: tGuest });
  };

  clearGuest = () => {
    this.setState({ selectedGuest: null });
  };

  onSubmit = () => {
    console.log('form submitted');
  };

  render() {
    const { isAttending, isPlusOne, selectedGuest } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="RSVPForm__form">
        <div className="RSVPForm__input-row">
          <InputSelect
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
                  tEvent.target.value = !isAttending;
                  this.updateField(tEvent);
                }}
              />
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
