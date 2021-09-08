import React, { Component } from 'react';
import Header from './components/header';
import HomeHeroSection from './components/homeHeroSection';
import './App.css';
import WhatWeOfferSection from './components/whatWeOfferSection';
import PersonalTrainingShowcaseSection from './components/personalTrainingShowcaseSection';
import ClientTestimonialSection from './components/clientTestimonialsSection';

class App extends Component {

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
 
export default App;

