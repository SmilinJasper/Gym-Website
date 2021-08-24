import React, { Component } from 'react';

class PerkItem extends Component {

    constructor(props){
        super(props);
    }

    state = {  }

    render() { 
        return ( <figure className='perk-item'>
        <img className='perk-item-image' src={this.props.src} alt={this.props.alt} />
        <figcaption className='perk-description'>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
        </figcaption>
    </figure> );
    }

}
 
export default PerkItem;