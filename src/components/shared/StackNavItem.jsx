import React from 'react';
import { debounce, throttle } from 'lodash';

class StackNavItem extends React.PureComponent {
    constructor( props ){
        super( props );

        this.onHandleWheel = debounce( this.onHandleWheel, 50, { leading: true, trailing: false } );
        // this.onHandleWheel = throttle( this.onHandleWheel, 1000, { leading: false, trailing: true } );
    }

    componentWillUnmount(){
        this.onHandleWheel.cancel();
    }
    
    onHandleWheel( scrollDir, orderIndex ){
        // console.log('debounce');
        this.props.handleWheel( scrollDir, orderIndex );
    }

    render(){
        const { children, handleWheel, orderIndex } = this.props;
        return (
            <div style={ { width: '100%', height: '100%' } } 
                onWheel={ tEvent => this.onHandleWheel( tEvent.deltaY, orderIndex ) }
            >
                { children }
            </div>
        )
    }
}

export default StackNavItem;