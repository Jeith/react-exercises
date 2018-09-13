import React, { Component } from 'react';
import './MemoryCard.css';
import './App.css';

class App extends Component {

	constructor() {
		super();
		this.state = {isFlipped: false};
	}
	clickHandler() {
		this.setState({
			isFlipped: !this.state.isFlipped
		})
	}

	render() {
		var cardClass = "MemoryCardInner";
		if (this.state.isFlipped) {
		    cardClass += " flipped";
		};
		return (
		    <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
		        <div className={cardClass}>
		            <div className="MemoryCardBack">
		                <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt="" />
		            </div>
		            <div className="MemoryCardFront">∆</div>
		        </div>
		    </div>
		);
	}
}

export default App;