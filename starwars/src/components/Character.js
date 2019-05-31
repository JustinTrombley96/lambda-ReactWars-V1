import React, { Component } from 'react';

export class Character extends Component {
	render() {
		return (
			<div className='characterCard'>
				<h2 className='name'>Name: {this.props.characteronProps.name}</h2>
				<p className='gender'>Gender: {this.props.characteronProps.gender}</p>
				<p className='birthday'>Birth Year: {this.props.characteronProps.birth_year}</p>
				<p className='eye'>Eye Color: {this.props.characteronProps.eye_color}</p>
				<p className='hair'>Hair Color: {this.props.characteronProps.hair_color}</p>
				<p className='height'>Height: {this.props.characteronProps.height}</p>
				<p className='mass'>Mass: {this.props.characteronProps.mass}</p>
				<p className='skin'>Skin/External Shell Color: {this.props.characteronProps.skin_color}</p>
			</div>
		);
	}
}
//Pulling in the new data from StarwarsChars and using it to display each piece of data.
export default Character;
