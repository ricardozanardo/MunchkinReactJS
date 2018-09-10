import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PlayerTemplate } from './PlayerTemplate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MunchkinReactJS!</h1>
        </header>
       
        <PlayerTemplate name="Ricardo" />
        <PlayerTemplate name="John" />

        
      </div>
    );
  }
}

export default App;
