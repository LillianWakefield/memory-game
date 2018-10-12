import React, { Component } from 'react';
import './MemoryGame.css';
import MemoryCard from './MemoryCard.js';
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
  var skull = <img className="Symbol" src ={skullSVG} alt="skull"></img>;
  var web = <img className="Symbol" src ={webSVG} alt="web"></img>;
  var brew = <img className="Symbol" src ={brewSVG} alt="brew"></img>;
  var candycorn = <img className="Symbol" src ={candycornSVG} alt="candycorn"></img>;
  var ghost = <img className="Symbol" src ={ghostSVG} alt="ghost"></img>;
  var hat = <img className="Symbol" src ={hatSVG} alt="hat"></img>;
  var orb = <img className="Symbol" src ={orbSVG} alt="orb"></img>;
  var pumpkin = <img className="Symbol" src ={pumpkinSVG} alt="pumpkin"></img>;
  var spider = <img className="Symbol" src ={spiderSVG} alt="spider"></img>;
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
  var card1 = newDeck[card1Index]
  var card2 = newDeck[card2Index]

  if(card1.Symbol !== card2.Symbol){
    setTimeout(()=>{
      this.unflipCards(card1Index, card2Index);
    },1000 );
    
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
        <header className="App-header">
          <h1 className="App-title">Spook-takular Memory Match</h1>
        </header>
        <div>
        {cardsJSX.slice(0,6)}
        </div>
        <div>
        {cardsJSX.slice(6,12)}
        </div>
        <div>
        {cardsJSX.slice(12,18)}
        </div>
      </div>
    );
  }
}

export default MemoryGame;
