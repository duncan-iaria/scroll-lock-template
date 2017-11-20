import React from 'react';

//COMPONENTS
import AnimatedText from '../../shared/AnimatedText/AnimatedText';

//STYLES
import './Landing.style.css';

//=========================
// COMPONENT
//=========================
const Landing = () => {
    return(
        <div className="landing__container">
            <div className="landing__title">
                <AnimatedText>
                    Join us for a fall time celebration of love!
                    <br/>
                    <br/>                    
                    10 / 27 / 2018
                </AnimatedText>
            </div>
            {/* <h1>LANDING PAGE</h1>
            <div>
                <div className="landing__color-block ecru"></div>
                <div className="landing__color-block olive"></div>                
                <div className="landing__color-block ocean"></div>
                <div className="landing__color-block plum"></div>
                <div className="landing__color-block oxblood"></div>
            </div> */}
        </div>
    )
}

//=========================
// EXPORTS
//=========================
export default Landing;