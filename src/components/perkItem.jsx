import React, { Component } from 'react';


class PerkItem extends Component {

    state = {  }

    render() { 
        
        this.IMAGESIZES =['perk-item-image--medium', 'perk-item-image--big'];

        this.checkImageSize = this.IMAGESIZES.includes(this.props.imageSize) ? this.props.imageSize : this.IMAGESIZES[0];

        return ( 
        
        <figure className='perk-item'>

        <img className= {`perk-item-image ${this.checkImageSize}`} src={this.props.imageSrc} alt={this.props.imageAlt} />
        
        <figcaption className='perk-description'>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
        </figcaption>

    </figure> 
        
        );
    }
}
 
export default PerkItem;