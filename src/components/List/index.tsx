import React, { FC } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import ListItem from './ListItem';
import { IGameData } from 'types/match';
import styled from 'styled-components';
import Pagination from 'components/List/Pagination';

type Props = {
	playerData: any,
	gamesData: Array<IGameData>,
	total: number,
}

const List: React.FC<Props> = ({ playerData, gamesData, total }) => {
	const [currentPage, setCurrentPage] = React.useState(1);
	
	const handlePageChange = (pageNumber: any) => {
		setCurrentPage(pageNumber);
	};
	
	const pageSize = 6;
	const games = gamesData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

	return (
		<Container>
			<ListGroup>
				{games.map(( gamesData, key ) => (
					<ListItem
						key={"Game_"+ key}
						gamesData={gamesData}
						playerData={playerData}
					/>
				))}
			</ListGroup>
			<Pagination
				totalItems={total}
				pageSize={pageSize}
				currentPage={currentPage} 
				handlePageChange={handlePageChange}
			/>
		</Container>

	);
};

const Container = styled.div`
 position: relative;
    z-index: 2;
`

export default List;
