import React from 'react';
import styled from 'styled-components';
import {IGameData, IGameRecap} from 'types/match';
import TeamDetails from './Team';
import { mediaQueries } from 'services/media';
import { IGameTimeLine } from '../../../../types/match';

interface IProps {
    gameRecapData: IGameRecap;
    gameTimelineData: IGameTimeLine;
}

const Teams: React.FC<IProps> = ({gameRecapData,gameTimelineData}) => {
    return (
    <Container>
        <TeamDetails puuids={gameTimelineData.info.participants} participants={gameRecapData.participants.slice(0,5)} teamName="Blue"/>
        <TeamDetails puuids={gameTimelineData.info.participants} participants={gameRecapData.participants.slice(5,10)} teamName="Red"/>
    </Container>);
};

const Container = styled.div`
    display: flex;
    gap: 2rem;
    padding: 0 25px;
    margin: 20px 0;
`;

export default Teams;