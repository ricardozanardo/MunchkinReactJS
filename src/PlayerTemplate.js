import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Player } from './Player';

export class PlayerTemplate extends Component {
  render() {

    var player = new Player(this.props.name, "male");

    return (
      <div>
          { player.getName() }
      </div>
    );
  }
}