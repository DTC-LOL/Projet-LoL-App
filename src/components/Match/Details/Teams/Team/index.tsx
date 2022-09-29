import React from 'react';
import styled from 'styled-components';
import {IGameData, IParticipant} from '@typesDef/match';
import SummonerCard from './SummonerCard/index';

interface IProps {
    teamName: string;
    participants: Array<IParticipant>;
}

const TeamDetails: React.FC<IProps> = ({teamName,participants}) => {

    return (
    <Container>
        <p>{teamName} Team</p>
        {participants.map((participant, key) => (
            <SummonerCard key={teamName + "_Summoner_"+ key} summonerDetail={participant}/>

        ))}
    </Container>);
};

const Container = styled.div`
    width: 50%;
`;

export default TeamDetails;