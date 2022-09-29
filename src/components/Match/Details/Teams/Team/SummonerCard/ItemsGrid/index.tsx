import { IParticipant } from '@typesDef/match';
import React from 'react';
import styled from 'styled-components';
interface IProps {
    summonerDetail: IParticipant;
}

const ItemsGrid: React.FC<IProps> = ({ summonerDetail }) => {
    return (
        <Container>
            <Item>
                {
                    summonerDetail.item0 ? <ItemImage src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/" + summonerDetail.item0 + ".png"} /> : <PlaceHolder />
                }
            </Item>
            <Item>
                {
                    summonerDetail.item1 ? <ItemImage src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/" + summonerDetail.item1 + ".png"} /> : <PlaceHolder />
                }
            </Item>
            <Item>
                {
                    summonerDetail.item2 ? <ItemImage src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/" + summonerDetail.item2 + ".png"} /> : <PlaceHolder />
                }
            </Item>
            <Item>
                {
                    summonerDetail.item3 ? <ItemImage src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/" + summonerDetail.item3 + ".png"} /> : <PlaceHolder />
                }
            </Item>
            <Item>
                {
                    summonerDetail.item4 ? <ItemImage src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/" + summonerDetail.item4 + ".png"} /> : <PlaceHolder />
                }
            </Item>
            <Item>
                {
                    summonerDetail.item5 ? <ItemImage src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/" + summonerDetail.item5 + ".png"} /> : <PlaceHolder />
                }
            </Item>
            <Item>
                {
                    summonerDetail.item6 ? <ItemImage src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/" + summonerDetail.item6 + ".png"} /> : <PlaceHolder />
                }
            </Item>
        </Container>
    );
};
const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content:center;
    height: 64px;
`;

const Item = styled.div``;

const ItemImage = styled.img`
    width: 32px;
    height: 32px;  
`;

const PlaceHolder = styled.div`
background-color: black;
width: 32px;
height: 32px;  
`;
export default ItemsGrid;