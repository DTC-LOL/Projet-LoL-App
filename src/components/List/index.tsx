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
				{gamesData.map((item: { recap: any, uuid: string }) => (
					<Line
						key={item.uuid}
						creation={item.recap.game_creation}
						mode={item.recap.game_mode}
					/>
				))}
			</ListGroup>
		</Container>

	);
};

export default List;
