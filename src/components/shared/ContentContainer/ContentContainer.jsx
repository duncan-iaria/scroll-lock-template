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
        const { location } = this.props;
        console.log( this.props ); 
        return (
            <div className="ContentContainer__container">
                <Header/>

                <TransitionGroup className="page-container">
                    <PageTransition
                        key={location.key}>
                        <Switch location={location}>
                            <Route exact path={ routes.LANDING } component={ Landing }/>
                            <Route exact path={ routes.REGISTRY } component={ Registry }/>
                            <Route exact path={ routes.ACTIVITIES } component={ Activities }/>
                            <Route exact path={ routes.LODGING } component={ Lodging }/>
                            <Route render={ () => <div>Page not found...</div> }/>
                        </Switch>
                    {/* <Route exact path={ routes.LANDING } component={ Landing }/>

                    <Route
                        location={location}
                        path={ routes.ACTIVITIES }
                        render={ props => (
                                    <Activities/> 
                            )
                        }>
                    </Route>
                    
                    <Route
                        location={location}
                        path={ routes.REGISTRY }
                        render={ props => (
                                    <Registry/>
                            )
                        }>
                    </Route>


                    <Route path={ routes.LODGING } component={ Lodging }/> */}
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