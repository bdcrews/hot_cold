import React from 'react';
import './Game.css';
import InputForm from './InputForm.js';
import Status from './Status.js';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			guessed: [], 
			answer: Math.floor(Math.random() * 100),
			feedback: "Make your Guess!",
			gameOver: false,
			delta: 0
		}

		this.onButton = this.onButton.bind(this);
	}

	updateFeedback(value) {
		const guessed = [...this.state.guessed,value];
		let gameOver = false;
		const length = guessed.length;
		const newDelta = Math.abs(this.state.answer - guessed[length-1]);
		let feedback;
		if(+value === this.state.answer) {
			gameOver = true;
			feedback = "You Win!!!"
		}
		else if(length === 1) { // first guess
			if(newDelta < 10) feedback = "Hot";
			else if (newDelta < 25) feedback = "Warm";
			else if (newDelta < 40) feedback = "Cool";
			else feedback = "Cold";
		}
		else  //(last >= 2) 
		{
			if(newDelta<this.state.delta) {
				feedback = "Hotter";
			}
			else if (newDelta>this.state.delta) {
				feedback = "Colder."
			}
			else {
				feedback = "No change in temperature."
			}
		}

		this.setState({
			gameOver: gameOver,
			feedback: feedback,
			delta: newDelta,
			guessed: guessed
		});
	}

	onButton(value) {
		if(this.state.guessed.find((guess)=>{return(guess===value)}) !== undefined) {
			//alert("You guessed this number already.");
		}
		else {
			this.updateFeedback(value);
		}
	}

	render(){
	let inputForm;
	if(this.state.gameOver) {
		return(
			<div className="game">
				<p>{this.state.feedback}</p>
				<button onClick={(e)=>{
					e.preventDefault();
					window.location.reload();
				}}>New Game</button>
				<Status guessed={this.state.guessed}/>
			</div>
			);
	}
	return(
			<div className="game">
				<p>{this.state.feedback}</p>
				<InputForm buttonTitle="Guess" onButton={this.onButton}/>
				<Status guessed={this.state.guessed}/>
			</div>
		);
	}
}