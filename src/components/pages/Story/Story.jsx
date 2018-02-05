import React from 'react';

// STYLES
import './Story.style.css';

//=========================
// COMPONENT
//=========================
const Story = ({ history }) => {
    // for scrolling content im going to put a waypoint to determind if it needs
    // to scroll so this element itself will have a handle scroll which defers to
    // main handle scroll, but only after checking it the waypoint is hit
    return(
        <div className="Story__container">
            <div className="Story__title">
                <h1>Our Story</h1>
            </div>
            <div>
            </div>
            <div className="Story__footer"/>
        </div>
    );
}

//=========================
// EXPORTS
//=========================
export default Story;