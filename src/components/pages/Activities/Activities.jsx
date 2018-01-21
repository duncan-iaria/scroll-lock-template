import React from 'react';
import { REGISTRY, LODGING } from '../../../constants/route.constants';
import { Redirect } from 'react-router-dom';

// STYLES
import './Activities.style.css';
//=========================
// COMPONENT
//=========================
const Activities = ({ history }) => {
    const handleScroll = ( e ) => {
        // console.log(e);
        console.log( e.deltaY );
        e.deltaY > 0 ?  history.history.push(REGISTRY) : history.history.push(LODGING);
        // console.log( history );
        // history.history.push( REGISTRY ); 
    }

    return(
        <div onWheel={ handleScroll }className="Activities__container">
            <h1>ACTIVITIES</h1>
        </div>
    );
}

//=========================
// EXPORTS
//=========================
export default Activities;