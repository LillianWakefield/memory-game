import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './App.css';
import MemoryGame from './MemoryGame.js';
import About from './About.js';


class App extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return (
            <div className='app'>
            <div className='navbar'>
                <Link to='/memory'>Home</Link>
                <Link to='/about'>About</Link>
            </div>
            <Switch>
            <Route path ='/memory-game' component={MemoryGame}/>
            <Route path ='/memory' component={MemoryGame}/>
            <Route path ='/about' component={About}/>
            </Switch>
            </div>
        )
    }
}
export default App;