import React from 'react';

export default function Newgame(props) {
	return (
		<button onClick={() => props.onClick()} className='new-game-button'>New Game</button>
	);
}