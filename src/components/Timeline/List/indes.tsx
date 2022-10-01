import { IGameTimeLine, IGameTimeLineFrameEvent } from '@typesDef/match';
import React from 'react';
import styled from 'styled-components';

interface IProps {
    gameTimelineData: IGameTimeLine;
}
const excludedItems = ["SKILL_LEVEL_UP", "LEVEL_UP", "ITEM_DESTROYED", "ITEM_SOLD"]

const TimeLineList: React.FC<IProps> = ({ gameTimelineData }) => {

    const valueSelectorByType = (event:IGameTimeLineFrameEvent) => {
        switch (event.type) {
            case "ITEM_PURCHASED":
                return (
                    <>Machin truc a acheter <ItemImage src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/" + event.itemId + ".png"} /></>
                );
        }
    }

    return (
        <Container>
            {gameTimelineData.info.frames[1].events.map((event, key) =>
                excludedItems.includes(event.type) ?
                    "" : (
                        <TimeLineListItem key={"Event_" + key}>
                            {event.timestamp} : {event.type}
                            {valueSelectorByType(event)}
                        </TimeLineListItem>
                    )
            )}
        </Container>
    );
};

const Container = styled.ul`

`;

const TimeLineListItem = styled.li`
    color: #fff;
`;

const ItemImage = styled.img`
    width: 48px;
    height: 48px;  
`;

export default TimeLineList;