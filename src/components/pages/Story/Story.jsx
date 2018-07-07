import React from 'react';
import { AnimatedText } from '../../shared';

// STYLES
import './Story.style.css';
const tree = require('../../../assets/images/logo/Tree.svg');
const flourish = require('../../../assets/images/logo/Flourish.svg');

//=========================
// COMPONENT
//=========================
const Story = ({ history }) => {
  // for scrolling content im going to put a waypoint to determind if it needs
  // to scroll so this element itself will have a handle scroll which defers to
  // main handle scroll, but only after checking it the waypoint is hit
  return (
    <div className="Story__container">
      <div className="Story__title">
        <h1>Our Story</h1>
      </div>
      <img className="spacer" src={flourish} alt={'Spacer Flourish'} />
      <div className="Story__text">
        <AnimatedText>
          <p>
            Most of you know that Duncan and Rhiannon met while living in Savannah – next door to one another! The story
            goes that one afternoon, while hard at work, Rhiannon (and Jenny!) had enough of the loud boys next door.
            They went over to give them a piece of their mind and ended up being completely disarmed by the sweet boy
            next door (Duncan).
          </p>
          <p>
            Turns out the loud music wasn’t even coming from Duncan’s place, but being the great guy that he is, he
            wasn’t even offended at the accusation. In fact, he took the opportunity to invite the girls to one of his
            shows (he was a drummer in{' '}
            <a href="https://open.spotify.com/artist/4rgaE0vA85QwDXOBULC8TN?si=eR-niEG4Qea3WCyJI3_pBA">
              General Oglethorpe and the Panhandlers
            </a>).
          </p>
          <p>
            Rhiannon didn’t make it to this show, but as fate would have it, a few months later, they ran into each
            other at a popular spot downtown on Cinco de Mayo. The rest, as they say, is history! Along the way, they
            have lived in Chapel Hill, NC (where they adopted their darling dog Sophie) and now in Atlanta, GA. They
            can’t wait to celebrate with their family and friends!
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
export default Story;
