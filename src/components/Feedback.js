import React from 'react';

export default function Feedback(props) {
	const randomNumber = props.randomNumber;
	const recentGuess = props.recentGuess;
	const absGuess = Math.abs(randomNumber - recentGuess);
	console.log(absGuess);
	return (
		<div className='feedback-wrapper'> 
			{props.recentGuess == props.randomNumber &&
				<h3 className='feedback'>Correct</h3>
			}
			{absGuess < 3 && absGuess > 0 && recentGuess !== 0 &&
				<h3 className='feedback'>Hot</h3>
			}
			{absGuess > 2 && absGuess < 11 && recentGuess !== 0 &&
				<h3 className='feedback'>Cold</h3>
			}
		</div>
	);
} 