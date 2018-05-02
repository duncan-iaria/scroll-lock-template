import React from 'react';

// STYLES
import './Lodging.style.css';

//=========================
// COMPONENT
//=========================
const LodgingItem = ({ title, description, imgUrl }) => {
    return (
        <div className="lodging-item__container">
            <div className="lodging__title">
                <h1>{title}</h1>
            </div>
            <div className="lodging-item__content">
                <div className="lodging-image__container">
                    <img src={imgUrl} alt={`${title}`} />
                </div>
                <div className="lodging__description">
                    <p>{description}</p>
                </div>
            </div>
            <div className="lodging-item__footer">
                <button>
                    more info
                </button>
            </div>
        </div>
    )
}

export default LodgingItem;