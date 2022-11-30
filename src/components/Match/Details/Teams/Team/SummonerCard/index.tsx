import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from 'services/media';
import { IParticipant } from 'types/match';
import ItemsGrid from './ItemsGrid';
import { useAppDispatch } from 'store/hooks';
import {setActiveFilter, setSelectedSummoner} from "store/features/filters/filtersSlice";

interface IProps {
    summonerDetail: IParticipant;
    puuid: string;
}

const SummonerCard: React.FC<IProps> = ({ summonerDetail, puuid }) => {
    const dispatch = useAppDispatch();

    const handleSummonerClick = () => {
        console.log("summoner clicked : ", puuid);
        dispatch(setSelectedSummoner(puuid));
        dispatch(setActiveFilter(""));
    }

    return (
        <Container>
            
            <SummonerCardInfosSummonerName>{summonerDetail.summonerName}</SummonerCardInfosSummonerName>
            <SummonerCardInfos>
                <CheckBox name="filter" onClick={() => handleSummonerClick()} teamid={summonerDetail.teamId}/>
                <ChampionThumbnail src={process.env.REACT_APP_DDRAGON_URL+"/img/champion/" + summonerDetail.championName + ".png"} />
            </SummonerCardInfos>
            <SummonerCardKDA>
                {/* <KDA kills={summonerDetail.kills} deaths={summonerDetail.deaths} assists={summonerDetail.assists} /> */}
                {summonerDetail.kills} / {summonerDetail.deaths} / {summonerDetail.assists}
            </SummonerCardKDA>
            <SummonerCardGameDetails>
                <p>CS :{summonerDetail.totalMinionsKilled}</p>
                <GoldDetails>
                <Gold><Icon src={"/coins.png"} width="20px"/>Gold Earned : {summonerDetail.goldEarned}</Gold>
                <Gold><Icon src={"/money_bag.png"} width="18px"  />Gold Spent : {summonerDetail.goldSpent}</Gold>
                </GoldDetails>

            </SummonerCardGameDetails>
            <SummonerCardItemGrid>
                <ItemsGrid summonerDetail={summonerDetail} />
            </SummonerCardItemGrid>
        </Container>
    );
};


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  color: #fff;
  border-bottom : 1px solid #222222;
    position: relative;
`;

const CheckBox = styled.input.attrs({ type: "radio" }) <{ teamid: number }>`
    appearance: unset;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    
    

    &:checked {
        border: 4px solid ${props => props.teamid === 100 ? "#E84855" : "#222A68"};
    }
`;

const SummonerCardInfos = styled.div`
    display: flex;
    flex-direction: column;

`;



const SummonerCardKDA = styled.div`
    flex: 1;
    text-align: center;
`

const SummonerCardGameDetails = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: ${props => props.theme.fontSize.small};
`

const SummonerCardItemGrid = styled.div`
    margin-top: 10px;
    display: flex;
    width: 100%;
    justify-content: center;
`

const Icon = styled.img`
    margin-right: 5px;
`
const GoldDetails = styled.div`

`;

const Gold = styled.p`
    display: flex;
    align-items: center;
    color: #fff;
    background-color: #D4AF37;
    border-radius: 15px;
    padding: 1px 5px;
    width: 100%;
    margin-top: 5px;

`;



const SummonerCardInfosSummonerName = styled.div`
    width: 100%;
    margin-bottom: 10px;
`;

const ChampionThumbnail = styled.img`
    ${mediaQueries("desktop")`
        width: 48px;
        height: 48px;
        border-radius: 999px;
        background-color: #000;
    `}
`;


export default SummonerCard;