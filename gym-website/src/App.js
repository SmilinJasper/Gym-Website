import React, { Component } from 'react';
import Header from './components/header';
import HomeHeroSection from './components/homeHeroSection';
import './App.css';
import WhatWeOfferSection from './components/whatWeOfferSection';

class App extends Component {
  state = {  }
  render() { 
    return ( <main>
      <Header />
      <HomeHeroSection />
      <WhatWeOfferSection />
    </main> );
  }
}
 
export default App;

