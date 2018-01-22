import React from 'react';

// class StackNavItem extends React.Component {
//     constructor( props ){
//         super( props );
//     }
    
//     render(){
//         const { children, handleWheel, orderIndex } = this.props;
//         return (
//             <div style={ { width: '100%', height: '100%' } } 
//                 onScroll={ tEvent => handleWheel( tEvent.deltaY, orderIndex ) }
//             >
//                 { children }
//             </div>
//         )
//     }
// }

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