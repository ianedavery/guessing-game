import React from 'react';

export default function Newgame(props) {
	return (
		<button onClick={() => props.onClick()} >New Game</button>
	);
}