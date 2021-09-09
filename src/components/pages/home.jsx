import React, { Component } from 'react';
import Header from '../header';
import HomeHeroSection from '../homeHeroSection';
import WhatWeOfferSection from '../whatWeOfferSection';
import PersonalTrainingShowcaseSection from '../personalTrainingShowcaseSection';
import ClientTestimonialSection from '../clientTestimonialsSection';

class Home extends Component {

  state = {  }

  render() { 
    return ( 

      <main>
        <Header />
        <HomeHeroSection />
        <WhatWeOfferSection />
        <PersonalTrainingShowcaseSection />
        <ClientTestimonialSection />
      </main> 
      
    );
  }

}
 
export default Home;

