import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Column} from 'simple-flexbox';
import './Start.css'
import pumpkinSVG from './img/pumpkin.svg';

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
                <h1>Memory Games!</h1>
                <h2>Card matching games made by Lillian and Caitlin</h2>
                </div>
                <Link to={'/memory-game/memory'}>
                <button className="spook">
                <Row vertical='center'>
                <Column><img className='startIcon' src={pumpkinSVG} alt="card" draggable="false"></img></Column>
                <Column className='startText'><div>Spooktacular</div><div>Memory Match</div></Column>
                </Row>
                </button>
                </Link>
            </div>
        )
    }
}
export default Start;