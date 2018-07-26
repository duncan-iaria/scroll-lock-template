import React from 'react';
import { AnimatedText } from '../../shared';

// STYLES
import './Activities.style.css';
const tree = require('../../../assets/images/logo/Tree.svg');
const flourish = require('../../../assets/images/logo/Flourish.svg');

//=========================
// COMPONENT
//=========================
const Activities = () => {
  return (
    <div className="Activities__container">
      <div className="Activities__title">
        <h1>Things To Do</h1>
      </div>
      <img className="spacer" src={flourish} alt={'Spacer Flourish'} />
      <div className="Activities__text">
        <AnimatedText>
          <p>
            One of the reasons we chose this area was for its abundance in natural beauty. So as you can imagine, there
            is a ton of fun stuff that can be done outdoors. Listed below are a few close options, but is by no means
            close to a complete list!
          </p>
          <div className="Activities__label">Hiking</div>
          <p>Tallulah Gorge State Park (~10 min drive)</p>
          <p>Black Rock Mountain State Park (~30 min drive from the venue)</p>

          <div className="Activities__label">Waterfalls</div>
          <p>
            Check out this site:{' '}
            <a href="http://www.wandernorthgeorgia.com/lake-rabun-waterfalls/">www.wandernorthgeorgia.com</a>
          </p>

          <div className="Activities__label">Goats & All Things Amish</div>
          <p>
            <a href="http://www.goats-on-the-roof.com/">Goats on the Roof</a> (~10 min drive)
          </p>

          <div className="Activities__label">Libations</div>
          <p>
            <a href="https://www.moonrisedistillery.com/">Moonrise Distillery</a> (~15 min drive)
          </p>
          <p>
            <a href="http://www.tigerwine.com/">Tiger Mountain Vineyards</a> (~15 min drive)
          </p>
          <p>
            <a href="http://www.12spiesvineyards.com/"> 12 Spies Vineyard</a> (~25 min drive)
          </p>
        </AnimatedText>
      </div>
      <img src={tree} alt={'Tree Logo'} height={32} style={{ padding: '30px' }} />
      <div />
    </div>
  );
};

//=========================
// EXPORTS
//=========================
export default Activities;
