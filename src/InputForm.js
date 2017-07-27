import React from 'react';
import './InputForm.css';

export default class InputForm extends React.Component {
	constructor(props) {
		super(props);
		this.processSubmit = this.processSubmit.bind(this);
	}

	processSubmit(event) {
		event.preventDefault();
		this.props.onButton(this.textInput.value);
	}

	render() {
		return(
			<form className="inputForm" onSubmit={this.processSubmit}>
				<input required type="number" min="0" max="100" placeholder="#" ref={(input) => { this.textInput = input; }}/>
				<button >Guess</button>
			</form>
		);
	}
}