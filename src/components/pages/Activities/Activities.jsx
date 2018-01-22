import React from 'react';

// STYLES
import './Activities.style.css';

//=========================
// COMPONENT
//=========================
const Activities = ({ history }) => {
    // for scrolling content im going to put a waypoint to determind if it needs
    // to scroll so this element itself will have a handle scroll which defers to
    // main handle scroll, but only after checking it the waypoint is hit
    return(
        <div className="Activities__container">
            <h1>ACTIVITIES</h1>
            <div>
            </div>
        </div>
    );
}

//=========================
// EXPORTS
//=========================
export default Activities;