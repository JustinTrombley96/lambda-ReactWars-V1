import React, { Component } from 'react';

export class Character extends Component {
	render() {
		return (
			<div className='characterCard'>
				<h2 className='name'>Name: {this.props.characteronProps.name}</h2>
				<p className='gender'>Gender: {this.props.characteronProps.gender}</p>
				<p className='birthday'>Birth Year: {this.props.characteronProps.birth_year}</p>
				<p className='eye'>Eye Color: {this.props.characteronProps.eye_color}</p>
				<p className=''>Hair Color: {this.props.characteronProps.hair_color}</p>
				<p className=''>Height: {this.props.characteronProps.height}</p>
				<p className=''>Mass: {this.props.characteronProps.mass}</p>
				<p className=''>Skin/External Shell Color: {this.props.characteronProps.skin_color}</p>
			</div>
		);
	}
}

export default Character;
