import React, { FC } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import moment from 'moment';
import {Link} from 'react-router-dom';
import localSelector from '@services/momentjs/locales/fr';
import { IGameData } from '@typesDef/match';
import styled from 'styled-components';

import {capitalizeFirstLowercaseRest} from '@services/utility';

type Props = {
	gamesData: IGameData,
	playerData: any,
}

const ListItem: React.FC<Props> = ({ gamesData, playerData }) => {

	React.useEffect(() => {		
		localSelector(navigator.language.split("-")[0]);
	},[])

	let playerRecap: any = [];

	gamesData.recap.participants.forEach((participant: any) => {
		if(participant.summonerName === playerData.name){
			playerRecap = participant;
		}
	});

	const winingTeam = gamesData.timeline.info.frames.slice(-1)[0].events.slice(-1)[0].winningTeam;

	return (
		<ListGroupItem disabled winned={winingTeam}>
			<LinkStyled to="">
				<Row>
					<Col lg={3}>
						<Paragraph className="fw-bold">{capitalizeFirstLowercaseRest(gamesData.recap.game_mode)}</Paragraph>

						<Paragraph className="border-bottom pb-3 pe-4">Il y a {moment(gamesData.recap.game_creation).fromNow(true)}</Paragraph>

						<Paragraph className={winingTeam === playerRecap.teamId ? "text-success fw-bold" : "text-danger fw-bold"}>
							{winingTeam === playerRecap.teamId ? "Victoire" : "Défaite"}
						</Paragraph>

						<Paragraph>{moment.unix(gamesData.recap.game_duration).format("m:s")}</Paragraph>
					</Col>
					<Col lg={5} className="border-start border-end">
						<Row>
							<Col>
								<Paragraph>Champion Level : {playerRecap.champlevel}</Paragraph>

								<Paragraph>Role : {capitalizeFirstLowercaseRest(playerRecap.role)}</Paragraph>
							</Col>
							<Col>
								<Paragraph>KDA : {playerRecap.kills}.{playerRecap.assists}:{playerRecap.deaths}</Paragraph>

								<Paragraph>Score Vision : {playerRecap.visionScore}</Paragraph>
								
								<Paragraph>CS : {playerRecap.totalMinionsKilled}</Paragraph>
							</Col>
						</Row>
					</Col>
					<Col lg={4}>
						<Row>
							{gamesData.recap.participants.map((participant: any) => {
								return <Col key={participant.summonerName} className={participant.summonerName == playerRecap.summonerName ? "fw-bold text-black" : ""} lg={6}>{participant.summonerName}</Col>	
							})}
						</Row>
					</Col>
				</Row>
			</LinkStyled>
		</ListGroupItem>
	);
};

const ListGroupItem = styled(ListGroup.Item)`
	background-color: #F5F5F5 !important;
	margin-bottom: 0.5rem;
	border: none !important;
`

const Paragraph = styled.p`
	margin: 0 !important;
`

const LinkStyled = styled(Link)`
	color: rgb(0, 0, 0, .7) !important;
	text-decoration: none !important;
	cursor: pointer !important;
`

export default ListItem;
