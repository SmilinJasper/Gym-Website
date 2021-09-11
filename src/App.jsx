import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home';

class App extends Component {

  state = {  }

  render() { 
    return ( 

        <Router>

        <Switch>

          <Route path='/' exact strict component={Home} />

        </Switch>

        </Router>

    );
  }

}
 
export default App;

