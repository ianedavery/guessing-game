import React from 'react';

export default function Feedback(props) {
	const randomNumber = props.randomNumber;
	const recentGuess = props.recentGuess;
	const absGuess = Math.abs(randomNumber - recentGuess);
	console.log(absGuess);
	return (
		<div> 
			{props.recentGuess == props.randomNumber &&
				<h2>Correct</h2>
			}
			{absGuess < 3 && absGuess > 0 && recentGuess !== 0 &&
				<h2>Hot</h2>
			}
			{absGuess > 2 && absGuess < 11 && recentGuess !== 0 &&
				<h2>Cold</h2>
			}
		</div>
	);
} 