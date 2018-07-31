import React from 'react';
import { AnimatedText } from '../../shared';

// STYLES
import './Lodging.style.css';
const mountain = require('../../../assets/images/logo/ThinMountains.svg');
const flourish = require('../../../assets/images/logo/Flourish.svg');

//=========================
// COMPONENT
//=========================
const Lodging = () => {
  return (
    <div className="Lodging__container">
      <div className="Lodging__title">
        <h1>Lodging</h1>
      </div>
      <img className="spacer" src={flourish} alt={'Spacer Flourish'} />
      <div className="Lodging__text">
        <AnimatedText>
          <p>
            Unfortunately, there is not enough room for all of our loved ones to stay at the inn/cabins. So unless you
            have been told that you will be staying at the inn/cabins, we will have to find somewhere else for you to
            sleep! Not to worry — there are plenty of close options nearby and there will be an available
            shuttle/transportation service to get you back to bed after the festivities.
          </p>
          <div className="Lodging__label">Inn / Fish Camp</div>
          <p>
            For those told they are staying at the Inn or the Fish Camp Cabins – you will have to call to make your
            reservation, as the rooms have been blocked out online. The number is{' '}
            <a href="tel:1-706-782-4946">706-782-4946</a>.
          </p>
          <p>
            If for some reason you prefer not to stay at the inn/cabins, please let us know ASAP, so that we can give
            your room to someone else.
          </p>
          <div className="Lodging__label">Other great options nearby:</div>
          <p>
            Airbnb has a ton of great looking options,{' '}
            <a href="https://www.airbnb.com/s/Lake-Rabun-Hotel-&-Restaurant--Andrea-Lane--Lakemont--GA--USA/homes?checkin=2018-10-26&checkout=2018-10-28&adults=1&children=0&infants=0&guests=1&query=Lake%20Rabun%20Hotel%20%26%20Restaurant%2C%20Andrea%20Lane%2C%20Lakemont%2C%20GA%2C%20USA&place_id=ChIJ_XEgfrbIWIgR7zJtiIAhQwA&refinement_paths%5B%5D=%2Fhomes&allow_override%5B%5D=&s_tag=kMToMWIS">
              check them out!
            </a>
          </p>
          <p>
            <a href="http://kingwoodresort.com/">Kingwood Gold & Country Club Resort</a>
          </p>
          <p>
            <a href="https://www.thewhitebirchinn.net/">The White Birch Inn</a>
          </p>

          <p>
            In addition to the above options, the Inn has also provided us with the contact information for someone who
            has several cabin properties that she often rents out for events at the Inn. If you are interested in
            getting her contact information, just let us know and we can pass that along!
          </p>
        </AnimatedText>
      </div>
      <img src={mountain} alt={'Mountain Logo'} height={32} style={{ padding: '30px' }} />
      <div />
    </div>
  );
};

//=========================
// EXPORTS
//=========================
export default Lodging;
