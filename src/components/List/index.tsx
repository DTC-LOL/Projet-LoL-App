import React, { FC } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Line from './ListItem';
import { releaseCapture } from 'konva/lib/PointerEvents';
import { IGameData } from '@typesDef/match';

type Props = {
	playerData: any,
	gamesData: Array<IGameData>,
}

const List: React.FC<Props> = ({ playerData, gamesData }) => {
	React.useEffect(() => {
		console.log(gamesData);
	},[])
	return (
		<Container>
			<ListGroup>
				{gamesData.map(( gamesData, key ) => (
					<Line
						key={"Game_"+ key}
						gamesData={gamesData}
					/>
				))}
			</ListGroup>
		</Container>

	);
};

export default List;
