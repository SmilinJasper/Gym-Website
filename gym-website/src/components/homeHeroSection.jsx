import React, { Component } from 'react'
import './homeHeroSection.css';

class HomeHeroSection extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>

<section class="home-hero">

    <h1 class="title">
        <span>ESH</span><br />
        FITNESS
    </h1>

    <a href="index.html"><button class="button__join">Join Now</button></a>

</section>

</React.Fragment> );
    }
}
 
export default HomeHeroSection;