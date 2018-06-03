import React from 'react';
import { InputCheckbox, InputSelect } from '../../shared/';

// STYLES
import './RSVPForm.style.css';

const RSVPForm = ({ isAttending, isLoading, isPlusOne, onUpdateField, onSubmit, getOptions, onSelectGuest }) => {
  return (
    <form onSubmit={onSubmit} className="RSVPForm__form">
      <div className="RSVPForm__input-row">
        <InputSelect
          name="name"
          getOptions={getOptions}
          isLoading={isLoading}
          onUpdateField={onUpdateField}
          placeholder="Your name, please"
          selectItem={onSelectGuest}
        />
      </div>
      <div className="RSVPForm__input-row">
        <InputCheckbox name="isAttending" label="Attending?" value={isAttending} onClick={onUpdateField} />
        <InputCheckbox name="isPlusOne" label="Plus One?" value={isPlusOne} onClick={onUpdateField} />
      </div>
      <input type="submit" value="RSVP" />
    </form>
  );
};

export default RSVPForm;
