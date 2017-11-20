import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import routes from '../../../constants/route.constants';

//COMPONENTS
import Landing from '../../pages/Landing/Landing';
import Activities from '../../pages/Activities/Activities';
import Registry from '../../pages/Registry/Registry';
import Lodging from '../../pages/Lodging/Lodging';

//STYLES
import './ContentContainer.style.css';

//=========================
// COMPONENT
//=========================
class ContentContainer extends Component {
    render() {
        return (
            <div className="content-container">
                <Route exact path={ routes.LANDING } component={ Landing }/>
                <Route path={ routes.ACTIVITIES } component={ Activities }/>
                <Route path={ routes.REGISTRY } component={ Registry }/>
                <Route path={ routes.LODGING } component={ Lodging }/>                    
            </div>
        );
    }
}

//=========================
// EXPORTS
//=========================
export default ContentContainer;