import React from 'react';

export default function YourGuesses(props) {
	const yourGuesses = props.valueArray.map((guess, index) =>
		<li key={index}>
			{...guess}
		</li>
	);
	return (
		<ul>{yourGuesses}</ul>
	);
}