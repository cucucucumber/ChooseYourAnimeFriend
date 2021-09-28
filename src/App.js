import React from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import { girls } from './Girls';

const state = {
	girls: girls,
	searchfield: ''
}

const App = () => {
	return([
		<div className = 'tc'>
			<h1 className = 'tc dark-green'> 选择你的老婆吧，指挥官！！！ </h1>
			<SearchBox/>
			<Cardlist girls = {girls}/>
		</div>
	])
}

export default App;