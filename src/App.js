import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard.js';

class App extends Component {
  render() {
    var row1 = []
    var row2 = []
    var row3 = []
    var row4 = []

    for(var i = 0; i<4; i++){
      row1.push(<MemoryCard />);
      row2.push(<MemoryCard />);
      row3.push(<MemoryCard />);
      row4.push(<MemoryCard />);
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <h3>Match cards to win</h3>
        </header>
        <div>
        {row1}
        </div>
        <div>
        {row2}
        </div>
        <div>
        {row3}
        </div>
        <div>
        {row4}
        </div>
      </div>
    );
  }
}

export default App;
