import React from 'react';
import styled from 'styled-components';
import { IGameTimeLine, IParticipant } from 'types/match';

interface IProps {
    gameTimelineData: IGameTimeLine;
    participants: IParticipant[];
    time: number
}

const TimeLineTrackers: React.FC<IProps> = ({ time, participants, gameTimelineData }) => {
    const mergeArrays = (arrays: any[]) => {
        const tempArray: Array<any> = [];
        arrays.forEach((frame) => {
            tempArray.push(frame.events);
        });
        return tempArray.flat();
    }

    const events: any = React.useMemo(() => mergeArrays(gameTimelineData.info.frames), [gameTimelineData.info.frames]);

    React.useEffect(() => {
        const eventsToRender = [];
        events.map((event: any) => {
            if (event.timestamp <= time) {
                eventsToRender.push(event);
            }
        })
    }, [time]);

    return (
        <Container>
            <ChampionCards>
                <ChampionCard>
                    <ChampionImage src={"https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/" + participants[0].championName + ".png"} />
                </ChampionCard>
                <ChampionCard>
                    <ChampionImage src={"https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/" + participants[0].championName + ".png"} />
                </ChampionCard>
                <ChampionCard>
                    <ChampionImage src={"https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/" + participants[0].championName + ".png"} />
                </ChampionCard>
                <ChampionCard>
                    <ChampionImage src={"https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/" + participants[0].championName + ".png"} />
                </ChampionCard>
                <ChampionCard>
                    <ChampionImage src={"https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/" + participants[0].championName + ".png"} />
                </ChampionCard>
                <ChampionCard>
                    <ChampionImage src={"https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/" + participants[0].championName + ".png"} />
                </ChampionCard>
                <ChampionCard>
                    <ChampionImage src={"https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/" + participants[0].championName + ".png"} />
                </ChampionCard>
                <ChampionCard>
                    <ChampionImage src={"https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/" + participants[0].championName + ".png"} />
                </ChampionCard>
                <ChampionCard>
                    <ChampionImage src={"https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/" + participants[0].championName + ".png"} />
                </ChampionCard>
                <ChampionCard>
                    <ChampionImage src={"https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/" + participants[0].championName + ".png"} />
                </ChampionCard>
            </ChampionCards>
        </Container>
    );
};

const Container = styled.div`
    height: 229px;
    max-height: 229px;
    overflow: hidden;
    overflow-y: scroll;
    padding-left: 0;
`;

const ChampionCards = styled.div`
 display: flex;
 flex-wrap: wrap;
`

const ChampionCard = styled.div`
    width: 50%;
    height: 32px;
`;

const ChampionImage = styled.img`
      height: 32px; 
`;

export default TimeLineTrackers;