import React from 'react';
import './Status.css';

export default class Status extends React.Component {


	render(){
		const guessed = this.props.guessed.map(
			(guess, index)=>{return(
				<li key={index}>{guess}</li>
				);}
			);
		return(
			<div className="status">
				<p>Guess #{this.props.guessed.length}</p>
				<ul>{guessed}</ul>
			</div>
		);
	}
}