import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard.js';

function generateDeck(){
  var symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  var deck = [];
  for (var i = 0; i < 16; i++){
    deck.push({isFlipped: false, symbol: symbols[i%8]})
  }
  shuffle(deck)
  return deck;
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: generateDeck(),
      pickedCards: []
    }
	}
  render() {
    var cardsJSX = this.state.deck.map((card, index) => {
			return <MemoryCard />
		});
		console.log(cardsJSX)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <h4>Match cards to win</h4>
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
