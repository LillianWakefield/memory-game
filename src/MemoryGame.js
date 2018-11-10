import React, { Component } from 'react';
import {Row, Column} from 'simple-flexbox';
import './MemoryGame.css';
import MemoryCard from './MemoryCard.js';
import TimerHOC from './Timer.js';

import skullSVG from './img/skull.svg';
import webSVG from './img/web.svg';
import brewSVG from './img/brew.svg';
import candycornSVG from './img/candycorn.svg';
import ghostSVG from './img/ghost.svg';
import hatSVG from './img/hat.svg';
import orbSVG from './img/orb.svg';
import pumpkinSVG from './img/pumpkin.svg';
import spiderSVG from './img/spider.svg';

function generateDeck() {
  var skull = <img className="Symbol" src ={skullSVG} alt="skull" draggable="false"></img>;
  var web = <img className="Symbol" src ={webSVG} alt="web" draggable="false"></img>;
  var brew = <img className="Symbol" src ={brewSVG} alt="brew" draggable="false"></img>;
  var candycorn = <img className="Symbol" src ={candycornSVG} alt="candycorn" draggable="false"></img>;
  var ghost = <img className="Symbol" src ={ghostSVG} alt="ghost" draggable="false"></img>;
  var hat = <img className="Symbol" src ={hatSVG} alt="hat" draggable="false"></img>;
  var orb = <img className="Symbol" src ={orbSVG} alt="orb" draggable="false"></img>;
  var pumpkin = <img className="Symbol" src ={pumpkinSVG} alt="pumpkin" draggable="false"></img>;
  var spider = <img className="Symbol" src ={spiderSVG} alt="spider" draggable="false"></img>;
  var symbols = [skull, web, brew, candycorn, ghost, hat, orb, pumpkin, spider];
  var deck = [];

  for(var i = 0; i< 18; i++) {
    deck.push({
      isFlipped: false,
      Symbol: symbols[i%9],
     })

  }
  shuffle(deck);

  return deck 
}
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


class MemoryGame extends Component {
  constructor (props){
    super(props);
    this.state = {
      deck: generateDeck(),
      pickedCards: [],
      flippedCards: 0,
      startTimer: false,
      stopTimer: false,
      gameOver: false,
      restartTimer: false,
    }
    this.restartTimer = this.restartTimer.bind(this)

  }
//callback that receives updated state from timer once time is zero
  timerStopped = (timeZero)=>{
    this.setState((state) => {
      return {gameOver: timeZero}
    });
  }
  //restarts game when "Play Again" is clicked
  restartTimer (){
    this.setState((state) => {
      return {
      deck: generateDeck(),
      startTimer: false,
      stopTimer: false,
      gameOver: false,
      restartTimer: true
    }
    });
  }

  pickCard(cardIndex){
    var cardToFlip = {...this.state.deck[cardIndex]}
  if(this.state.deck[cardIndex].isFlipped === true){
    return
  }
  //stops game when time is zero
  else if(this.state.gameOver === true){
    return
  }
  //triggers timer to start once a card is picked
  else if(this.state.startTimer === false){
    cardToFlip.isFlipped = true;
    this.setState((state) => {
      return {startTimer: true,
      restartTimer:false}
    });
  }
  else
  cardToFlip.isFlipped = true;

  var newPickedCards = this.state.pickedCards.concat(cardIndex);
  var newDeck = this.state.deck.map((card,index)=>{
    if(cardIndex === index) {
      return cardToFlip
    }
    return card
  });

if (newPickedCards.length === 2){
  var card1Index = newPickedCards[0];
  var card2Index = newPickedCards[1];
  var card1 = newDeck[card1Index]
  var card2 = newDeck[card2Index]

  if(card1.Symbol !== card2.Symbol){
    setTimeout(()=>{
      this.unflipCards(card1Index, card2Index);
    },1000 ); 
  }
//triggers timer to stop once all cards have been turned
else if(card1.Symbol === card2.Symbol){
  this.setState((state) => {
    return {flippedCards: state.flippedCards + 1}
  });
    if (this.state.flippedCards=== 7){
      this.setState((state) => {
        return {stopTimer: true}
      });
    }
  }
newPickedCards = [];
}

  this.setState({
    deck: newDeck, 
    pickedCards: newPickedCards})
  }

unflipCards (card1Index, card2Index){
  let newDeck = this.state.deck.map(card =>{
    return {...card}
  });
  
newDeck[card1Index].isFlipped = false;
newDeck[card2Index].isFlipped = false;
this.setState({
  deck:newDeck
});
}

  render() {
    var cardsJSX = this.state.deck.map((card, index) =>{
      return < MemoryCard symbol={card.Symbol} isFlipped={card.isFlipped} key={index} pickCard={this.pickCard.bind(this, index)}/>
    });

    return (
      <div className="App">
      <Row justifyContent='center'>
        <header className="App-header">
          <h1 className="App-title">Spook-takular Memory Match!</h1>
        </header>
        </Row>
          <Row justifyContent='center' alignItems='start' className="Play-area">
            <Column className="Card-area">
              <Row justifyContent='center' alignItems='center' className="Card-row">
              {cardsJSX.slice(0,6)}
              </Row>
              <Row justifyContent='center' alignItems='center' className="Card-row">
              {cardsJSX.slice(6,12)}
              </Row>
              <Row justifyContent='center' alignItems='center' className="Card-row">
              {cardsJSX.slice(12,18)}
              </Row>
            </Column>
            <Column justifyContent='center' alignItems='start' className="Score-sidebar">
                  <Row alignItems='center'><img src="https://uploads-ssl.webflow.com/5bbe3e7c287cc56784173a16/5bbf7e7c4c6f6157e160d383_Clock%202.png" width="30" alt="clock" className="Timer-icon"/>
                  <div className="Timer-text"><TimerHOC timerStopped={this.timerStopped} startTimer={this.state.startTimer} stopTimer={this.state.stopTimer} restartTimer={this.state.restartTimer}/></div>
                  </Row> 
                  <Row alignItems='center'><img src="https://uploads-ssl.webflow.com/5bbe3e7c287cc56784173a16/5bbf7e7c4c6f6157e160d383_Clock%202.png" width="30" alt="clock" className="Timer-icon"/>
                  <div><button className="Restart-button" onClick={this.restartTimer}>Play Again</button></div>
                  </Row>
            </Column>
          </Row>
      </div>
    );
  }
}

export default MemoryGame;
