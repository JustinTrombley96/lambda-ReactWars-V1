import React, { Component } from 'react';
import Character from './Character';

export class StarwarsChars extends Component {
	render() {
		return (
			<div className='characterList'>
				{this.props.starwarsChars.map(starwarsChar => <Character characteronProps={starwarsChar} />)}
			</div>
		);
	}
}

//Pulling in the variable from the App.js, mapping over the data to display onto the Character component.
