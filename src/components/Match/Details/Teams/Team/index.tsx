import React from 'react';
import styled from 'styled-components';
import {IParticipant} from 'types/match';
import SummonerCard from './SummonerCard';

interface IProps {
    teamName: string;
    participants: Array<IParticipant>;
    puuids: Array<any>;
    
}

const TeamDetails: React.FC<IProps> = ({teamName,participants, puuids}) => {

    return (
    <Container color={teamName}>

        {participants.map((participant, key) => (
            <SummonerCard key={teamName + "_Summoner_"+ key} puuid={puuids[teamName === "Red" ? key + 4 : key].puuid} summonerDetail={participant}/>
        ))}
    </Container>);
};

const Container = styled.div`
    border-radius: 10px;

`;

export default TeamDetails;