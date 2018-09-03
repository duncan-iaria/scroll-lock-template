import React, { Fragment } from 'react';
import Guest from './Guest';

const GuestList = ({ title, guests }) => {
  return (
    <Fragment>
      <div className="GuestList__section-title">{title}</div>
      <ul>
        {guests.map(tempGuest => (
          <Guest guest={tempGuest} key={tempGuest._id} />
        ))}
      </ul>
    </Fragment>
  );
};

export default GuestList;
