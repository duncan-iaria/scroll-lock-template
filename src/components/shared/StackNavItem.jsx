import React from 'react';

const StackNavItem = ({ children, handleWheel, orderIndex }) => {
    return (
        <div style={ { width: '100%', height: '100%' } } 
            onWheel={ tEvent => handleWheel( tEvent.deltaY, orderIndex ) }
        >
            { children }
        </div>
    );
}

export default StackNavItem;