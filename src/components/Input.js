import React from 'react';

export default function Input(props) {
	return(
		<form onSubmit={event => event.preventDefault()} className='guess-form'>
			<fieldset>
				<label aria-label='guess-form' />
				<input id='guess-form' type='number' min={props.min} max={props.max} placeholder='Guess a number' />
			</fieldset>
				<button 
					type='submit' 
					onClick={(value) => props.onClick(document.getElementById('guess-form').value)}>
					Submit
				</button>
		</form>
	);
}