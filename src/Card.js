import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
    render() { 
        return ( 
            <div class={`Card Card-${this.props.image}`}>
                <img src={`/images/icon-${this.props.image}.svg`} />
                <h3>{this.props.image}</h3>
                <p>{this.props.copy}</p>
                <a href="https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-" alt="Learn More About The 3 Column Challenge">Learn More</a>
            </div> 
        );
    }
}
 
export default Card;