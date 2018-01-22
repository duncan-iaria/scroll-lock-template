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
import StackNavItem from '../StackNavItem';

//STYLES
import './ContentContainer.style.css';

//=========================
// COMPONENT
//=========================
class ContentContainer extends Component {
    constructor( props ){
        super(props);
        
        this.state = {
            isTransitioning: false,
            transitionDuration: 800,
            screenOrder: [
                routes.LANDING,
                routes.ACTIVITIES,
                routes.LODGING,
                routes.REGISTRY
            ],
        }
    
        this.onHandleScroll = this.onHandleScroll.bind( this );
    }

    onHandleScroll( scrollDir, orderIndex ){
        const { screenOrder, transitionDuration, isTransitioning } = this.state;
        const { history } = this.props;

        if( isTransitioning )
            return;

        if( scrollDir >= 0  && orderIndex < screenOrder.length - 1 ){
            // next route
            this.setState({ isTransitioning: true });
            setTimeout( () => { this.setState({ isTransitioning: false}) }, transitionDuration );
            history.push( screenOrder[ orderIndex + 1 ] );
        }
        else if ( orderIndex > 0 ){
            // prev route
            this.setState({ isTransitioning: true });  
            setTimeout( () => { this.setState({ isTransitioning: false}) }, transitionDuration );              
            history.push( screenOrder[ orderIndex - 1 ] );        
        }
    }

    getOrderIndex( navItem ){
        const tempIndex = this.state.screenOrder.indexOf( navItem );
        if( tempIndex >= 0 ){
            return tempIndex;
        }

        console.log( 'no screen order was found for the nav item' );
        return this.state.screenOrder.length - 1;
    }

    render() {
        const { location, history } = this.props;

        return (
            <div className="ContentContainer__container">
                <Header/>

                <TransitionGroup className="page-container">
                    <PageTransition
                        key={location.key}
                        duration={800}
                        animationClass="next"
                    >
                        <Switch location={location}>
                            <Route exact path={ routes.LANDING } render={ () =>
                                    <StackNavItem 
                                        handleWheel={ this.onHandleScroll }
                                        orderIndex={ this.getOrderIndex( routes.LANDING ) }
                                    >
                                        <Landing/>
                                    </StackNavItem>
                                }
                            />
                            
                            <Route exact path={ routes.ACTIVITIES } render={ () =>
                                    <StackNavItem 
                                        handleWheel={ this.onHandleScroll }
                                        orderIndex={ this.getOrderIndex( routes.ACTIVITIES ) }
                                    >
                                        <Activities/>
                                    </StackNavItem>
                                }
                            />

                            <Route exact path={ routes.LODGING } render={ () =>
                                    <StackNavItem 
                                        handleWheel={ this.onHandleScroll }
                                        orderIndex={ this.getOrderIndex( routes.LODGING ) }
                                    >
                                        <Lodging/>
                                    </StackNavItem>
                                }
                            />

                            <Route exact path={ routes.REGISTRY } render={ () =>
                                    <StackNavItem 
                                        handleWheel={ this.onHandleScroll }
                                        orderIndex={ this.getOrderIndex( routes.REGISTRY ) }
                                    >
                                        <Registry/>
                                    </StackNavItem>
                                }
                            />

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