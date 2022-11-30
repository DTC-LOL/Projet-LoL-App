import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {IGameRecap} from 'types/match';
import TeamDetails from './Team';
import { mediaQueries } from 'services/media';
import { IGameTimeLine } from '../../../../types/match';

interface IProps {
    gameRecapData: IGameRecap;
    gameTimelineData: IGameTimeLine;
    children : ReactElement;
}

const Teams: React.FC<IProps> = ({gameRecapData,gameTimelineData, children}) => {
    return (
    <Container>
        <TeamDetails puuids={gameTimelineData.info.participants} participants={gameRecapData.participants.slice(0,5)} teamName="Blue"/>
        {children}
        <TeamDetails puuids={gameTimelineData.info.participants} participants={gameRecapData.participants.slice(5,10)} teamName="Red"/>
    </Container>);
};

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr; 
    gap: 2rem;
    align-items: center;
    padding: 0 25px;
    margin: 20px 0;
    @media (max-width: 820px) {
        grid-template-columns: 1fr 1fr;
        
    }
`;

export default Teams;