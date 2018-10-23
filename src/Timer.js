import React, { Component } from 'react';
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

/* startTimer(){
   if(this.state.isOn === false){
  this.setState({isOn: true })
 console.log(this.state.isOn)}
}

 resetTimer(){
  this.setState({isOn: false})
  
}*/
    render(){
      let timerDisplay;
      if(this.props.isOn === false){
        timerDisplay = <div>01:00</div>;
      }
      else 
      timerDisplay = <Countdown date={Date.now() + 60000} renderer={renderer}/>;
        return(
       <div>{timerDisplay}</div> 
     )}

    }
    


export default Timer;