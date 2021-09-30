import React, {Component} from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import {girls} from './Girls';

class App extends Component {
	constructor() {
		super()
		this.state = {
			girls: girls,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render() {
		const filteredGirls = this.state.girls.filter(girls =>{
			return girls.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return([
			<div className = 'tc'>
				<h1 className = 'tc dark-green'> 选择你的老婆吧，指挥官！！！ </h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<Cardlist girls = {filteredGirls}/>
			</div>
		]);
	}
}

export default App;