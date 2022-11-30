import React, { FC } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import moment from 'moment';
import {Link} from 'react-router-dom';
import localSelector from 'services/momentjs/locales/fr';
import { IGameData } from 'types/match';
import styled from 'styled-components';
import { mediaQueries } from 'services/media';
import {capitalizeFirstLowercaseRest} from 'services/utility';

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
		<ListGroupItem winned={winingTeam}>
			<LinkStyled to={"/match/"+gamesData.uuid}>
				<Row>
					<Col lg={2}>
						<Paragraph className="fw-bold">{capitalizeFirstLowercaseRest(gamesData.recap.game_mode)}</Paragraph>

						<Paragraph className="border-bottom border-dark pb-2 w-50">Il y a {moment(gamesData.recap.game_creation).fromNow(true)}</Paragraph>

						<Paragraph className={winingTeam === playerRecap.teamId ? "text-success pt-2 fw-bold" : "text-danger pt-2 fw-bold"}>
							{winingTeam === playerRecap.teamId ? "Victoire" : "Défaite"}
						</Paragraph>

						<Paragraph>{moment.unix(gamesData.recap.game_duration).format("m:s")}</Paragraph>
					</Col>
					<Col lg={6} className="border-start border-end border-dark">
						<Row>
							<Col>
								<Row>
									<Col className="pe-0 pl-2">
										<ChampionImage src={process.env.REACT_APP_DDRAGON_URL+"/img/champion/" + playerRecap.championName + ".png"} />
									</Col>
									<Col className="px-0">
										<SpellImage src={process.env.REACT_APP_DDRAGON_URL+"/img/spell/"+playerRecap.summoner1Id+".png"} />
										<SpellImage src={process.env.REACT_APP_DDRAGON_URL+"/img/spell/"+playerRecap.summoner2Id+".png"} />
									</Col>
								</Row>
							</Col>
							<Col>
								<Paragraph>
									Champion Level : {playerRecap.champlevel}
								</Paragraph>

								<Paragraph>Role : {capitalizeFirstLowercaseRest(playerRecap.role)}</Paragraph>
							</Col>
							<Col>
								<Paragraph>
									KDA : {playerRecap.kills} / {playerRecap.deaths} / {playerRecap.assists}
								</Paragraph>
								<Paragraph className="text-center">
									{
										playerRecap.kills && playerRecap.deaths && playerRecap.assists ? ((playerRecap.kills+playerRecap.assists)/playerRecap.deaths).toFixed(2) : 0
									}
								</Paragraph>

								<Paragraph>Score Vision : {playerRecap.visionScore}</Paragraph>
								
								<Paragraph>CS : {playerRecap.totalMinionsKilled}</Paragraph>
							</Col>
						</Row>
					</Col>
					<ParticipantsList lg={4}>
						<Row>
							{gamesData.recap.participants.map((participant: any) => {
								return <Col key={participant.summonerName} className={participant.summonerName == playerRecap.summonerName ? "fw-bold" : ""} lg={6}>
									<ParticipantsChampionImage src={process.env.REACT_APP_DDRAGON_URL+"/img/champion/" + participant.championName + ".png"} />
									{participant.summonerName}
								</Col>	
							})}
						</Row>
					</ParticipantsList>
				</Row>
			</LinkStyled>
		</ListGroupItem>
	);
};

const ListGroupItem = styled(ListGroup.Item)`
	background-color: #363636;
	margin-bottom: 0.5rem;
	border: none !important;
	font-size: 0.8rem !important;
`

const Paragraph = styled.p`
	margin: 0 !important;
`

const LinkStyled = styled(Link)`
	color: rgb(255, 255, 255, .8);
	text-decoration: none !important;
	cursor: pointer !important;
	transition: all .3s;
	&:hover {
		opacity: .5;
		color: rgba(255, 255, 255, .8) !important;
	}
`
const ChampionImage = styled.img`
    width: 40px;
    height: 40px; 
	border-radius: 50%; 

	${mediaQueries("desktop")`
	    width: 80px;
    	height: 80px; 
	`} 
`;

const SpellImage = styled.img`
	display: block;
	width: 18px;
	height: 18px;
	border-radius: 50%;
	margin-bottom: 0.2rem;
	${mediaQueries("desktop")`
		width: 30px;
		height: 30px;
	`} 
`
const ParticipantsList = styled(Col)`
	display: none;

	${mediaQueries("desktop")`
		display: block;
	`} 
`

const ParticipantsChampionImage = styled.img`
	width: 25px;
	height: 25px; 
	border-radius: 50%; 
	margin-right: 0.5rem;
`;

export default ListItem;
