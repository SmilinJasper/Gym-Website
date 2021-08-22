import React, { Component } from 'react';
import Header from './components/header';
import HomeHeroSection from './components/homeHeroSection';
import './App.css'

class App extends Component {
  state = {  }
  render() { 
    return ( <main>
      <Header />
      <HomeHeroSection />
    </main> );
  }
}
 
export default App;

