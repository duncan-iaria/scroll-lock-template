import React from 'react';

//STYLE
import './AnimatedText.style.css';

//=========================
// COMPONENT
//=========================
const AnimatedText = ( { children } ) => {
    return(
        <div className="animated_text">
            { children }
        </div>
    )
}

//=========================
// EXPORT
//=========================
export default AnimatedText;