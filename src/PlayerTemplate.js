import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Player } from './Player';
import Drawer from 'react-toolbox/lib/drawer';
import Button from 'react-toolbox/lib/button/Button';

export class PlayerTemplate extends Component {

    state = {
        active: false
    };

    handleToggle = () => {
        this.setState({active: !this.state.active});
    };

    render() {
        var player = new Player(this.props.name, "male");

        return (
            <div>
                <Button label='Minhas Cartas' onClick={this.handleToggle} />
                <Drawer active={this.state.active} onOverlayClick={this.handleToggle}>
                    <h5>This is your Drawer.</h5>
                    <p>You can embed any content you want, for example a Menu.</p>
                </Drawer>            
            </div>
        );
    }
}