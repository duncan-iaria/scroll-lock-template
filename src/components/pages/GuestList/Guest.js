import React from 'react';

const Guest = ({ guest }) => {
  const { displayName } = guest;
  return <li>{displayName}</li>;
};

export default Guest;
