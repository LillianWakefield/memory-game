import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
    constructor() {
        super();
        this.state = {
            isFLipped: false
        }
    }
    render() {
       var memoryCardInnerClass = "memoryCardInner";
       if (this.state.isFlipped === true) {
        memoryCardInnerClass += (" flipped");
       }
      return (
        <div className="memoryCard" onClick ={this.clickHandler.bind(this)}>
    <div className={memoryCardInnerClass}>
        <div className="memoryCardBack">
            <img className="IMG" src ="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt="card"></img>
        </div>
        <div className="memoryCardFront">
            ∆
        </div>
    </div>
</div>
          
      );
    }
    clickHandler(){
        console.log('hi')
        this.setState({isFlipped: !this.state.isFlipped}); 
    }
}

export default MemoryCard;