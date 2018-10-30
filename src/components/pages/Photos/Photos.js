import React, { Component } from 'react';

// STYLES
import './Photos.style.css';
const flourish = require('../../../assets/images/logo/Flourish.svg');

class Photos extends Component {
  render() {
    return (
      <div className="Photos__container">
        <div className="Photos__title">
          <h1>Photos</h1>
        </div>
        <img className="spacer" src={flourish} alt={'Spacer Flourish'} />
        <div className="Photos__text">
          <p>hey there</p>
        </div>
      </div>
    );
  }
}

export default Photos;
