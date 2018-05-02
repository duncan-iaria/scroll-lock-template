import React from 'react';
//STYLES
import './Landing.style.css';
const logo = require('../../../assets/images/WeddingLogo01.png');

//=========================
// COMPONENT
//=========================
const Landing = () => {
    return (
        <div className="landing__container">
            <div className="landing__title">
                {/* <AnimatedText>
                    Join us for a fall time celebration of love!
                    <br/>
                    <br/>                    
                    10 / 27 / 2018
                </AnimatedText> */}
                <img src={logo} alt={'Rhiannon and Duncan Logo'} />
            </div>
            <div className="landing__footer" />
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