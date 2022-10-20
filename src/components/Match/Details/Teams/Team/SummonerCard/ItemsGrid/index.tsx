import { mediaQueries } from '@services/media';
import { IParticipant } from '@typesDef/match';
import React from 'react';
import styled from 'styled-components';
interface IProps {
    summonerDetail: IParticipant;
}

const ItemsGrid: React.FC<IProps> = ({ summonerDetail }) => {
    return (
        <Container>
            {
                Array(7).fill(null).map((_, index) => (
                    <Item  key={"summonerCardItem" + index + "_" + Math.floor(Math.random() * 5000)}>
                        {
                            summonerDetail['item' + index] ? <ItemImage src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/" + summonerDetail['item' + index] + ".png"} /> : <PlaceHolder />
                        }
                    </Item>
                ))
            }
        </Container>
    );
};
const Container = styled.div`

display: none;
	${mediaQueries("desktop")`
        display: flex;
        flex-wrap: wrap;
    align-items: center;
    height:fit-content;
    gap: 5px;
    margin: auto 0;
    margin-top: 5px;
	`} 
 
`;

const Item = styled.div`

`;

const ItemImage = styled.img`
    width: 36px;
    height: 36px;  
`;

const PlaceHolder = styled.div`
    background-color: #363636;
    width: 36px;
    height: 36px;
 
`;
export default ItemsGrid;