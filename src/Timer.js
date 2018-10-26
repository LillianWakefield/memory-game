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
        const {start, stop, reset} = this.props.timer;
        if(this.props.isOn === true){
            start();  
        }
        if(this.props.stopTimer === true){
            stop();  
        }
    }
    render() {
        return (
            <div>
            <Timer.Minutes />:<Timer.Seconds />
            </div>
        );
    }
}

const TimerHOC = withTimer({
    direction: 'backward',
    initialTime: 120000,
    startImmediately: false,
})(ClockUpDown);


export default TimerHOC;