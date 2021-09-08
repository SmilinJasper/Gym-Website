import React, { Component } from 'react'
import './homeHeroSection.css';

class HomeHeroSection extends Component {
    state = {  }
    render() { 
        return ( 

    <section className='home-hero'>

        <h1 className='title'>
            <span>ESH</span><br />
            FITNESS
        </h1>

        <a href='index.html'><button className='button__join'>Join Now</button></a>

    </section>

        );
    }
}
 
export default HomeHeroSection;