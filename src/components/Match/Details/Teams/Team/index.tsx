import React from 'react';
import styled from 'styled-components';
import {IGameData, IParticipant} from 'types/match';
import SummonerCard from './SummonerCard';

interface IProps {
    teamName: string;
    participants: Array<IParticipant>;
    puuids: Array<any>;
    
}

const TeamDetails: React.FC<IProps> = ({teamName,participants, puuids}) => {

    return (
    <Container color={teamName}>

        <TeamName>{teamName} Team</TeamName>
        {participants.map((participant, key) => (
            <SummonerCard key={teamName + "_Summoner_"+ key} puuid={puuids[teamName === "Red" ? key + 4 : key].puuid} summonerDetail={participant}/>
        ))}
    </Container>);
};

const Container = styled.div`
    background-color: ${props => props.color == "Blue" ? "#222A68" : "#E84855"};
    width: 50%;
    border-radius: 10px;

`;

const TeamName = styled.div`
    color: #fff;
    text-align: center;
`;

export default TeamDetails;