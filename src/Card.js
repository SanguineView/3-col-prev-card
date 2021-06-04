import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
    render() { 
        return ( 
            <div class={`Card Card-${this.props.image}`}>
                <img src={`/images/icon-${this.props.image}.svg`} alt={`${this.props.image} vehicle`}/>
                <h3>{this.props.image}</h3>
                <p>{this.props.copy}</p>
                <a href="https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-">Learn More</a>
            </div> 
        );
    }
}
 
export default Card;