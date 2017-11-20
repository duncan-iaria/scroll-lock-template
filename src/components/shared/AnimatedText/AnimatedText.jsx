import React, { Component } from 'react';

//STYLE
import './AnimatedText.style.css';

//=========================
// COMPONENT
//=========================
class AnimatedText extends Component {
    constructor( props ){
        super( props );

        this.state = {
            isIntro: false,
        }
    }

    //start the animation as soon as the component loads
    componentDidMount(){
        setTimeout( () => { this.setState( { isIntro: true } ) }, 10 );
    }

    render(){
        let tempStyle;
        this.state.isIntro ? tempStyle = 'animated-text__text--active' : tempStyle = 'animated-text__text--inactive';
        
        return(
            <div className={ tempStyle }>
                { this.props.children }
            </div>
        )
    }
}

//=========================
// EXPORT
//=========================
export default AnimatedText;