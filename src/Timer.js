import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import MemoryGame from './MemoryGame.js'

const GameOver = () => <span>Time's Up!</span>;

// Renderer callback with condition
const renderer = ({minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <GameOver />;
  } else
    // Render a countdown
    return <span>{minutes}:{seconds}</span>;
  };

class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOn: false   
}
this.startTimer = this.startTimer.bind(this)
this.resetTimer = this.resetTimer.bind(this)
  }

 startTimer(){
   if(this.state.isOn === false){
  this.setState({isOn: true })
 console.log(this.state.isOn)}
}

 resetTimer(){
  this.setState({isOn: false})
  
}
    render(){
      let timerDisplay;
      if(this.state.isOn === true){
        timerDisplay = <Countdown date={Date.now() + 60000} renderer={renderer}/>;
      }
      else 
      {
        timerDisplay = <div>01:00 </div>;
      }
        return(
       <div>
         {timerDisplay}
 <button onClick={this.startTimer}>start</button>
 <button onClick={this.resetTimer}>Reset</button>
 </div> 
     )}

    }
    


export default Timer;