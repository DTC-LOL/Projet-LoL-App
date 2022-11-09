import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {IGameData, IGameRecap} from 'types/match';
import TeamDetails from './Team';
import { mediaQueries } from 'services/media';

interface IProps {
    gameRecapData: IGameRecap;
    children: ReactElement
}

const Teams: React.FC<IProps> = ({gameRecapData, children}) => {

    return (
    <Container>
        <TeamDetail participants={gameRecapData.participants.slice(0,5)} teamName="Blue"/>
        {children}
        <TeamDetail participants={gameRecapData.participants.slice(5,10)} teamName="Red"/>
    </Container>);
};

const Container = styled.div`
    display: flex;
    gap: 2rem;
    padding: 0 25px;
    margin: 20px 0;
    @media (max-width: 820px) {
        flex-wrap: wrap;
    }
`;

const TeamDetail = styled(TeamDetails) `
    @media (max-width: 820px) {
        width: 50%    
    }
`;

export default Teams;