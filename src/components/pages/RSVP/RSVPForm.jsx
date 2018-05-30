import React from 'react';
import { InputCheckbox, InputSelect } from '../../shared/';

// STYLES
import './RSVPForm.style.css';

//=========================
// COMPONENT
//=========================
const RSVPForm = ({ name, isAttending, isPlusOne, onUpdateField, onSubmit, isLoading }) => {
  return (
    <form onSubmit={onSubmit} className="RSVPForm__form">
      <div>Hello, rsvp form</div>
      <div className="RSVPForm__input-row">
        <InputSelect name="name" value={name} onUpdateField={onUpdateField} isLoading={isLoading} />
      </div>
      <div className="RSVPForm__input-row">
        <InputCheckbox name="isAttending" label="Attending?" value={isAttending} onClick={onUpdateField} />
        <InputCheckbox name="isPlusOne" label="Plus One?" value={isPlusOne} onClick={onUpdateField} />
      </div>
      <input type="submit" value="RSVP" />
    </form>
  );
};

//=========================
// EXPORTS
//=========================
export default RSVPForm;
