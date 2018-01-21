import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group'
import routes from '../../../constants/route.constants';

//COMPONENTS
import Header from '../Header/Header';
import Landing from '../../pages/Landing/Landing';
import Activities from '../../pages/Activities/Activities';
import Registry from '../../pages/Registry/Registry';
import Lodging from '../../pages/Lodging/Lodging';
import PageTransition from '../Transitions/PageTransition';

//STYLES
import './ContentContainer.style.css';

//=========================
// COMPONENT
//=========================
class ContentContainer extends Component {
    render() {
        const { location, history } = this.props;
        console.log( this.props ); 
        console.log( history );
        return (
            <div className="ContentContainer__container">
                <Header/>

                <TransitionGroup className="page-container">
                    <PageTransition
                        key={location.key}
                        duration={800}>
                        <Switch location={location}>
                            <Route exact path={ routes.LANDING } component={ Landing }/>
                            <Route exact path={ routes.REGISTRY } component={ Registry }/>
                            
                            <Route exact path={ routes.ACTIVITIES } render={ history => <Activities history={history}/> }/>

                            <Route exact path={ routes.LODGING } component={ Lodging }/>
                            <Route render={ () => <div>Page not found...</div> }/>
                        </Switch>
                    </PageTransition>
                </TransitionGroup>               
            </div>
        );
    }
}

//=========================
// EXPORTS
//=========================
export default withRouter( ContentContainer );