import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//COMPONENTS
import Landing from '../../pages/Landing/Landing';

//STYLES
import './ContentContainer.style.css';

//=========================
// COMPONENT
//=========================
class ContentContainer extends Component {
    render() {
        return (
            <Route exact path="/" component={ Landing }/>
        )
    }
}

//=========================
// EXPORTS
//=========================
export default ContentContainer;