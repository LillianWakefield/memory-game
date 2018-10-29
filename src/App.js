import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import MemoryGame from './MemoryGame.js';
import Start from './Start.js';


class App extends Component {
   
    render (){
        return (
            <Switch>
            <Route path ='/memory-game' exact ={true} component={Start}/>
            <Route path ='/memory-game/memory' component={MemoryGame}/>
            </Switch>
        )
    }
}
export default App;