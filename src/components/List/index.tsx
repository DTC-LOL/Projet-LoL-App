import React, { FC } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Line from './line';

type Props = {
	playerData: any,
	gamesData: Array<any>,
}

const List: React.FC<Props> = ({ playerData, gamesData }) => {

	return (
		<Container>
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

	);
};

export default List;
