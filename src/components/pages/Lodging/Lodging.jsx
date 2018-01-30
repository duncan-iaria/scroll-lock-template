import React from 'react';
import LodgingItem from './LodgingItem';

// DATA
import lodgingData from '../../data/lodging.json'

// STYLES
import './Lodging.style.css';

//=========================
// COMPONENT
//=========================
const Lodging = () => {
    return(
        <div className="Lodging__container">
            <div className="content">
                {
                    lodgingData.items.map( (tLodgingItem, tIndex) => {
                        return (
                            <LodgingItem 
                                key={tIndex} 
                                title={tLodgingItem.title}
                                description={tLodgingItem.description}
                                imgUrl={tLodgingItem.imgUrl}>
                            </LodgingItem>
                        )
                    })
                }
            </div>
        </div>
    );
}

//=========================
// EXPORTS
//=========================
export default Lodging;