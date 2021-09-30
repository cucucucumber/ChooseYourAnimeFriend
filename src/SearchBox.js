import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className = 'pa2'>
			<input 
			className = 'pa3 ba b--green bg-light-green br-pill tc'
			type = 'search' 
			placeholder = '帽子的颜色'
			onChange = {searchChange}
			/>
		</div>
	)

}

export default SearchBox