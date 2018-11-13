import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Start.css'

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
                <Link to={'/memory-game/memory'}><button>Start</button></Link>
            </div>
            </div>
        )
    }
}
export default Start;