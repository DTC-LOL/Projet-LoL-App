import React from 'react';
import styled from 'styled-components';
import {IParticipant} from 'types/match';
import SummonerCard from './SummonerCard';

interface IProps {
    teamName: string;
    participants: Array<IParticipant>;
}

const TeamDetails: React.FC<IProps> = ({teamName,participants}) => {

    return (
    <Container>
        {participants.map((participant, key) => (
            <SummonerCard key={teamName + "_Summoner_"+ key} summonerDetail={participant} team={teamName}/>
        ))}
    </Container>);
};

const Container = styled.div`
    border-radius: 10px;

`;

export default TeamDetails;