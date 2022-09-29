import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '@services/media';
import { IParticipant } from '@typesDef/match';
import KDA from './KDA';
import ItemsGrid from './ItemsGrid';

interface IProps {
    summonerDetail: IParticipant;
}

const SummonerCard: React.FC<IProps> = ({summonerDetail}) => {
    return (
    <Container>
        <ChampionThumbnail src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/"+summonerDetail.championName+".png"}/>
        <p>{summonerDetail.summonerName}</p>

        <KDA kills={summonerDetail.kills} deaths={summonerDetail.deaths} assists={summonerDetail.assists}/>

        <ItemsGrid summonerDetail={summonerDetail}/>
    </Container>);
};

const Container = styled.div`
  display: flex;
  padding: 10px;
`;

const ChampionThumbnail = styled.img`
    ${mediaQueries("desktop")`
        width: 100px;
        height: 100px;
        border-radius: 999px;
        background-color: #000;
    `}
`;


export default SummonerCard;