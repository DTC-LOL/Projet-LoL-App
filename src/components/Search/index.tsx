import React from 'react';
import styled from 'styled-components';

const Search: React.FC = () => {

	return (
		<Container>
			<form >
				<input type="text" name="name" id="name" placeholder="Pseudo du joueur" />
				<select name="location" id="location">
					<option value="europe">Europe</option>
					<option value="asie">Asie</option>
				</select>
			</form>
		</Container>
	);
};

const Container = styled.div`
	background: #fff
`;
export default Search;
