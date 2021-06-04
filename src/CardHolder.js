import React, { Component } from 'react';
import Card from './Card'
import './CardHolder.css'

class CardHolder extends Component {
    static defaultProps = { 
        cards: [
            {
                image: 'sedans',
                bg: 'hsl(31, 77%, 52%)',
                copy:'Choose a sedan for its affodability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
            },
            {
                image: 'suvs',
                bg: 'hsl(184, 100%, 22%)',
                copy:'Take an SUV for its spavious interior, power and versatility. Perfect for your next family vacation and off-road adventures.'
            },
            {
                image: 'luxury',
                bg: 'hsl(179, 100%, 13%)',
                copy:'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
            }
        ]
    }
    render() { 
        return ( 
            <div className="CardHolder">
                {this.props.cards.map((card) => <Card {...card} />)}
            </div>
        );
    }
}
 
export default CardHolder;