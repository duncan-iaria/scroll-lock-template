import React from 'react';
import { debounce, throttle } from 'lodash';

class StackNavItem extends React.PureComponent {
    constructor( props ){
        super( props );

        this.state = {
            touchStartY: null,
        }

        this.onHandleWheel = debounce( this.onHandleWheel, 50, { leading: true, trailing: false } );
        this.handleTouch = throttle( this.handleTouch, 128 );        
        this.handleTouchStart = this.handleTouchStart.bind( this );       
        // this.onHandleWheel = throttle( this.onHandleWheel, 1000, { leading: false, trailing: true } );
    }

    componentWillUnmount(){
        this.onHandleWheel.cancel();
    }
    
    onHandleWheel( tScrollDir, tOrderIndex ){
        // console.log('debounce');
        this.props.handleWheel( tScrollDir, tOrderIndex );
    }

    handleTouchStart( tTouchPosY ){
        this.setState({ touchStartY: tTouchPosY });
    }

    handleTouch( tTouchPosY ){
        console.log( tTouchPosY );
        if( this.state.touchStartY - tTouchPosY > 0 ){
            //going up
        }
        else {
            //going down
        }
    }

    render(){
        const { children, handleWheel, orderIndex } = this.props;
        return (
            <div style={ { width: '100%', height: '100%' } } 
                onWheel={ tEvent => this.onHandleWheel( tEvent.deltaY, orderIndex ) }
                onTouchStart={ e => { this.handleTouchStart( e.touches[0].pageY ) } }
                onTouchMove={ e => { this.handleTouch( e.touches[0].pageY ) } }
            >
                { children }
            </div>
        )
    }
}

export default StackNavItem;