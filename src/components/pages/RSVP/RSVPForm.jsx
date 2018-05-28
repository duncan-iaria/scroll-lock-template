import React from 'react';
import { InputCheckbox } from '../../shared/';

// STYLES
import './RSVPForm.style.css';

//=========================
// COMPONENT
//=========================
const RSVPForm = ({ name, isAttending, isPlusOne, onUpdateField, onSubmit }) => {
  return (
    <form onSubmit className="RSVPForm__form">
      <div>Hello, rsvp form</div>
      <div className="RSVPForm__input-row">
        <input type="text" name="name" value={name} onChange={onUpdateField} placeholder="Your name, please..." />
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
