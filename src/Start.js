import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import MemoryGame from './MemoryGame.js';
import './Start.css'
//import axios from 'axios'

class Start extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    
    render() {
        return (
            <div className="App">
            <div className="startHeader">
                <h1>Memory Game</h1>
                <Link to={'/memory-game/memory'}><button>Start!</button></Link>
            </div>
            </div>
        )
    }
}
export default Start;