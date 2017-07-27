import React, { Component } from 'react';
import './App.css';
import Game from './Game.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1><span>Hot or Cold</span></h1>
        <Game className="App-intro"/>
      </div>
    );
  }
}

export default App;
