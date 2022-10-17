import React, { FC } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import ListItem from './ListItem';
import { releaseCapture } from 'konva/lib/PointerEvents';
import { IGameData } from '@typesDef/match';
import styled from 'styled-components';

type Props = {
	playerData: any,
	gamesData: Array<IGameData>,
}

const List: React.FC<Props> = ({ playerData, gamesData }) => {

	return (
		<Container>
			<ListGroup>
				{gamesData.map(( gamesData, key ) => (
					<ListItem
						key={"Game_"+ key}
						gamesData={gamesData}
						playerData={playerData}
					/>
				))}
			</ListGroup>
		</Container>

	);
};

const Container = styled.div`

`

export default List;
