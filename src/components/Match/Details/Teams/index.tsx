import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {IGameRecap} from 'types/match';
import TeamDetails from './Team';


interface IProps {
    gameRecapData: IGameRecap;
    children : ReactElement;
}

const Teams: React.FC<IProps> = ({gameRecapData, children}) => {

    return (
    <Container>
        <TeamDetails participants={gameRecapData.participants.slice(0,5)} teamName="Blue"/>
        {children}
        <TeamDetails participants={gameRecapData.participants.slice(5,10)} teamName="Red"/>
    </Container>);
};

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr; 
    gap: 2rem;
    padding: 0 25px;
    margin: 20px 0;
    @media (max-width: 820px) {
        grid-template-columns: 1fr 1fr;
        
    }
`;

export default Teams;