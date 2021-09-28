import React from 'react';
import Card from './Card';

const Cardlist = ({ girls }) => {
	return (
		<div>
			{
				girls.map((g, i) => {
					return(
						<Card 
						key = {i} 
						id = {girls[i].id} 
						name = {girls[i].name} 
						link = {girls[i].link}/>
					);
				})
			}
	    </div>
	)
}

export default Cardlist;