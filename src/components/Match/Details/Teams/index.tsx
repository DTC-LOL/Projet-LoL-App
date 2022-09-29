import React from 'react';
import styled from 'styled-components';
import {IGameData, IGameRecap} from '@typesDef/match';
import TeamDetails from './Team';

interface IProps {
    gameRecapData: IGameRecap;
}

const Teams: React.FC<IProps> = ({gameRecapData}) => {

    return (
    <Container>
        <TeamDetails participants={gameRecapData.participants.slice(0,5)} teamName="Blue"/>
        <TeamDetails participants={gameRecapData.participants.slice(5,10)} teamName="Red"/>
    </Container>);
};

const Container = styled.div`
    display: flex;
`;

export default Teams;