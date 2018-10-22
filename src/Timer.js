import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';

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
this.stopTimer = this.stopTimer.bind(this)
  }

 startTimer(){

  this.setState({isOn: true })
  console.log('timer is on')
 console.log(this.state.isOn)
}

 stopTimer(){
  this.setState({isOn: false})
  console.log('timer is off')
  console.log(this.state.isOn)
}

    render(){
      return(
        <Countdown date={Date.now() + 10000} renderer={renderer}/>
      )
    }
    
}

export default Timer;