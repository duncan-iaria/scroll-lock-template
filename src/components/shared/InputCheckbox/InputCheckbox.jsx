import React from 'react';

//STYLES
require('./InputCheckbox.style.css');

const InputCheckbox = ({ onClick, value, name, label }) => {
  const checkboxStyle = value ? 'selected' : '';
  return (
    <div className="InputCheckbox__wrapper">
      <button className={checkboxStyle} name={name} value={value} onClick={onClick} />
      <div className="InputCheckbox__label">{label}</div>
    </div>
  );
};

export default InputCheckbox;
