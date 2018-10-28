import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import MemoryGame from './MemoryGame.js';
import Start from './Start.js';


class App extends Component {
   
    render (){
        return (
            <div className='app'>
            <Switch>
            <Route path ='/' exact ={true} component={Start}/>
            <Route path ='/memory' component={MemoryGame}/>
            </Switch>
            </div>
        )
    }
}
export default App;