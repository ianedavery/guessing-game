import React from 'react';
import Header from './Header';
import Input from './Input';
import Output from './Output';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recentGuess: 0,
			valueArray: [], 
			randomNumber: Math.floor(Math.random() * 10) + 1};
	}

	handleClick(value) {
		this.setState({ valueArray: [...this.state.valueArray, value] });
		this.setState({recentGuess: value});		
	}

	changeRecentGuess(recentGuess) {
		this.setState({
			recentGuess: this.recentGuess
		});
	}

	render() {
		return(
			<div>
				<Header />
				<Input min={1} max={10} onClick={value => this.handleClick(value)} />
				<Output valueArray={this.state.valueArray} randomNumber={this.state.randomNumber} recentGuess={this.state.recentGuess} />
			</div>
		);	
	}
}