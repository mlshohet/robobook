import React from 'react';

const SearchBox = ({searchBox, searchChange}) => {
	return (
		<div>
			<input
				aria-label='Search Robots'
				className = 'pa3 mb2'
				type='search'
				placeholder='search robots'
				onChange = {searchChange}
			/>
		</div>
		);
}

export default SearchBox;