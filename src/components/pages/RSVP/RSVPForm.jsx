import React from 'react';

// STYLES
import './RSVPForm.style.css';

//=========================
// COMPONENT
//=========================
const RSVPForm = ({ name, isAttending, isPlusOne, onUpdateField, onSubmit }) => {
  return (
    <form onSubmit className="RSVPForm__form">
      <div>Hello, rsvp form</div>
      <input type="text" name="name" value={name} onChange={onUpdateField} />
      <input type="checkbox" name="isAttending" value={isAttending} onChange={onUpdateField} />
      <input type="submit" value="RSVP" />
    </form>
  );
};

//=========================
// EXPORTS
//=========================
export default RSVPForm;
