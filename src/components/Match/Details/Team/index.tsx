import React from 'react';
import styled from 'styled-components';
import {IGameData} from '@typesDef/match';
import SummonerCard from './SummonerCard/index';

interface IProps {
    gameRecapData: IGameData;
}

const TeamDetails: React.FC<IProps> = ({gameRecapData}) => {

    React.useEffect(() => {
        console.log(gameRecapData);
    },[]);

    return (
    <Container>
        <p>Red Team</p>
        <SummonerCard summonerDetail={undefined}/>
    </Container>);
};

const Container = styled.div`
    width: 50%;
`;

export default TeamDetails;