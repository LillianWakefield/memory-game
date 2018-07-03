import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard.js';

function generateDeck() {
  var symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"];
  var deck = [];
  for(var i = 0; i< 16; i++) {
    deck.push({
      isFlipped: false,
      Symbol: symbols[i%8],
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


class App extends Component {
  constructor (){
    super();
    this.state = {
      deck: generateDeck(),
      pickedCards: [],
    }
  }
  
  pickCard(cardIndex){
    var cardToFlip = {...this.state.deck[cardIndex]}
  if(this.state.deck[cardIndex].isFlipped === true){
    return
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

  if(newDeck[card1Index].Symbol !== newDeck[card2Index].Symbol){

    setTimeout(this.unflipCards.bind(this, card1Index, card2Index), 1000)
  }
  newPickedCards = [];
}

  this.setState({
    deck: newDeck, 
    pickedCards: newPickedCards})
  }

  unflipCards (card1Index, card2Index){
var card1 = {...this.state.deck[card1Index]};
var card2 = {...this.state.deck[card2Index]};
card1.isFlipped = false;
card2.isFlipped = false;

var newDeck = this.state.deck.map((card, index) =>{
  if(card1 === index) {
   return card1
  }
  if (card2 === index) {
    return card2
  }
  return card
})

this.setState({deck: newDeck})
  }
  render() {
    var cardsJSX = this.state.deck.map((card, index) =>{
      return < MemoryCard symbol={card.Symbol} isFlipped={card.isFlipped} key={index} pickCard={this.pickCard.bind(this, index)}/>
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <h3>Match cards to win</h3>
        </header>
        <div>
        {cardsJSX.slice(0,4)}
        </div>
        <div>
        {cardsJSX.slice(4,8)}
        </div>
        <div>
        {cardsJSX.slice(8,12)}
        </div>
        <div>
        {cardsJSX.slice(12,16)}
        </div>
      </div>
    );
  }
}

export default App;
