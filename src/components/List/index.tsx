import React, { FC } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Line from './line';

type Props = {
	playerData: any,
	gamesData: Array<any>,
	isLoading: boolean
}

const List: React.FC<Props> = ({ playerData, gamesData, isLoading }) => {

	return (
		!isLoading ? <Container>
			<ListGroup>
				{gamesData.map((item: { gameMode: string, gameCreation: Date, uuid: string }) => (
					<Line
						key={item.uuid}
						creation={item.gameCreation}
						mode={item.gameMode}
					/>
				))}
			</ListGroup>
		</Container> 
		: 
		<Container><p>Loading...</p></Container>
	);
};

export default List;
