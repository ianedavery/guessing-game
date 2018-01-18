import React from 'react';
import Feedback from './Feedback';

export default function Output(props) {
	return(
		<div>
			<Feedback randomNumber={props.randomNumber} recentGuess={props.recentGuess} />
			<div>Your Guesses {props.valueArray + ' '}</div>
		</div>
	);
}