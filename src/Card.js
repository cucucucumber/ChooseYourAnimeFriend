import React from 'react';

const Card = (props) => {
	return(
		<div className = "tc fp1 dib br2 pa3 ma2 grow bw2 shadow-2">
			<img alt = 'gfl' src = {props.link} width="250" height="300"/>
			<div>
				<h2>{props.name}</h2>
				<p> 选我选我选我 </p>
			</div>
		</div>
	);
}

export default Card;