import React, { Component } from 'react'
import './showcaseImage.css'

class ShowcaseImage extends Component {
    state = {  }
    render() { 
        return ( 
            <img class='showcase-image' src= {this.props.imageSource} />
         );
    }
}
 
export default ShowcaseImage;