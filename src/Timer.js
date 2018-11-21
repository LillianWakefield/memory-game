import React from 'react';
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
        //restarts timer when restart button is clicked
        if (this.props.restartTimer === true) {
            reset();
        }
        //stops game when time is zero
        setCheckpoints([
            {
                time: 0,
                callback: ()=> this.props.timerStopped(true),
            },
        ]);
    
}


    render() {
        return (
            <div>
            <div><Timer.Seconds/>s</div>
            </div>
        );
    }
}

const TimerHOC = withTimer({
    direction: 'backward',
    initialTime: 90000,
    startImmediately: false,
    lastUnit: "s"
})(ClockUpDown);

export default TimerHOC;