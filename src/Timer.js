import React, { Component } from 'react';
import Timer from 'react-compound-timer';

const withTimer = timerProps => WrappedComponent => wrappedComponentProps => (
  <Timer {...timerProps}>
    {timerRenderProps =>
      <WrappedComponent {...wrappedComponentProps} timer={timerRenderProps} />}
  </Timer>
);

class ClockUpDown extends React.Component {
    
    componentDidUpdate(){
        const {setCheckpoints, start, stop, reset} = this.props.timer;
        //triggers timer start when a card is picked
        if(this.props.startTimer === true){
            start();  
        }
        //stops timer once all cards are matched
        if(this.props.stopTimer === true){
            stop();  
        }
        //sends data to memory game to stop game when time is zero
        setCheckpoints([
            {
                time: 0,
                callback: ()=> this.props.timerStopped(true)
                
            },
            
        ]);
    
}


    render() {
        let display;
        let seconds = {Timer};
        if (seconds < 10){
            display = <div>0<Timer.Minutes />:0<Timer.Seconds /></div>;
        }
        else
        display = <div>0<Timer.Minutes />:<Timer.Seconds /></div>;
        return (
            <div>
            {display}
            </div>
        );
    }
}

const TimerHOC = withTimer({
    direction: 'backward',
    initialTime: 90000,
    startImmediately: false,
})(ClockUpDown);


export default TimerHOC;