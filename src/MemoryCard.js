import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFLipped: false
        }
    }
    render() {
       var memoryCardInnerClass = "memoryCardInner";
       if (this.props.isFlipped === true) {
        memoryCardInnerClass += (" flipped");
       }
      return (
        <div className="memoryCard" onClick ={this.props.pickCard}>
    <div className={memoryCardInnerClass}>
        <div className="memoryCardBack">
            <img className="IMG" src ="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt="card"></img>
        </div>
        <div className="memoryCardFront">
            {this.props.symbol}
        </div>
    </div>
</div>
          
      );
    }
    
}

export default MemoryCard;