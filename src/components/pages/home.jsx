import React, { Component } from 'react';
import Header from '../header';
import HomeHeroSection from '../homeHeroSection';
import WhatWeOfferSection from '../whatWeOfferSection';
import PersonalTrainingShowcaseSection from '../personalTrainingShowcaseSection';
import ClientTestimonialSection from '../clientTestimonialsSection';
import Footer from '../footer';

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
        <Footer />
      </main> 
      
    );
  }

}
 
export default Home;

