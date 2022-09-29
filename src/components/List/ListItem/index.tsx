import React, { FC } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import moment from 'moment';
import localSelector from '@services/momentjs/locales/fr';
import { IGameData } from '@typesDef/match';
import styled from 'styled-components';

type Props = {
	gamesData: IGameData,
}

const ListItem: React.FC<Props> = ({ gamesData }) => {
	React.useEffect(() => {
		localSelector(navigator.language.split("-")[0]);
	},[])
	return (
		<ListGroupItem disabled winned={gamesData.timeline.info.frames.slice(-1)[0].events.slice(-1)[0].winningTeam}>
			<Row>
				<Col>Partie {gamesData.recap.game_mode}</Col>
				<Col>Jouée le {moment(gamesData.recap.game_creation).format("dddd D MMMM  YYYY à h:mm:ss ")}</Col>
			</Row>
		</ListGroupItem>
	);
};

const ListGroupItem = styled(ListGroup.Item)`
	background-color: #124980 !important;
`

export default ListItem;
