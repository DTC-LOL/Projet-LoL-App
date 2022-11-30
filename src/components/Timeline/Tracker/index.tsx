import React from 'react';
import styled from 'styled-components';
import { IGameTimeLine, IParticipant } from 'types/match';
import { mergeArrays } from 'utils/mergeArray';
import { IGameTimeLineFrameEvent } from '../../../types/match';

interface IProps {
    gameTimelineData: IGameTimeLine;
    participants: IParticipant[];
    time: number;
    gameMode: string;
}

const excludedEventType = ["PAUSE_END", "ITEM_PURCHASED", "WARD_PLACED", "WARD_KILL", "ITEM_DESTROYED", "ITEM_SOLD"];

const TimeLineTrackers: React.FC<IProps> = ({gameMode, time, participants, gameTimelineData }) => {
    const [championStatsTracker, setChampionStatsTracker] = React.useState<any>([]);
    const [teamsGoldsTracker, setTeamsGoldsTracker] = React.useState<any>({blue: 0, red : 0});
    const [redTeamKills, setRedTeamKills] = React.useState<number>(0);
    const [blueTeamKills, setBlueTeamKills] = React.useState<number>(0);
    const events: any = React.useMemo(() => mergeArrays(gameTimelineData.info.frames), [gameTimelineData.info.frames]);
    const [previousTime, setPreviousTime] = React.useState<number>(0);

    React.useEffect(() => {
        const trkrs: Array<any> = [

        ];

        participants.forEach((participant: any) => {
            trkrs.push({
                participantId: participant.participantId,
                summonerName: participant.summonerName,
                championName: participant.championName,
                teamId: participant.teamId,
                level: 1,
                kills: 0,
                deaths: 0,
                assists: 0,
                gold: 500
            })
        })

        if (time > 110000) {
            const goldPerSeconde = gameMode === "ARAM" ?  5.5: 2.04;
            participants.map((participant: any, index: number) => {
                
                trkrs[index].gold = (500 + (2.04 * ((time - 110000) / 1000)));
        })
        } else {
            participants.map((participant: any, index: number) => {
                trkrs[index].gold = 500;
            })
        }

        events.map((event: IGameTimeLineFrameEvent) => {
            if (event.timestamp <= time) {
                switch (event.type) {
                    case 'LEVEL_UP':
                        if (event.participantId) {
                            trkrs[event.participantId - 1].level = event.level
                        }
                        break;

                    case 'CHAMPION_KILL':
                        if (event.killerId && event.victimId && event.assistingParticipantIds) {
                            event.killerId > 5 ? setRedTeamKills((old) => old + 1 ) : setBlueTeamKills((old) => old + 1);
                            trkrs[event.killerId - 1].kills += 1;
                            trkrs[event.victimId - 1].deaths += 1;
                            trkrs[event.killerId - 1].gold += event.bounty;
                            if (event.shutdownBounty !== 0) {
                                trkrs[event.killerId - 1].gold += event.shutdownBounty;
                            }
                            event.assistingParticipantIds.forEach((id: number) => {
                                trkrs[id - 1].assists += 1;
                            });

                        }
                        break;
                    default:
                        break;
                }

            }
        })

        trkrs.map((participant: any, index: number) => {
            const blueTeamGold = trkrs.filter((participant: any) => participant.teamId === 100).reduce((a: any, b: any) => a + b.gold, 0);
            const redTeamGold = trkrs.filter((participant: any) => participant.teamId === 200).reduce((a: any, b: any) => a + b.gold, 0);
            setTeamsGoldsTracker({blue: blueTeamGold, red: redTeamGold});
        })

        setChampionStatsTracker(trkrs)
        // setChampionStatsTracker(trackers);
        setPreviousTime(time);

    }, [time]);

    return (
        <Container>
            {blueTeamKills + "vs" + redTeamKills}

            {/* {Math.ceil(teamsGoldsTracker.blue)} vs {Math.ceil(teamsGoldsTracker.red)} */}
            <ChampionCards>
                {championStatsTracker.map((participant: any, key: number) => (
                    <ChampionCard teamColor={participant.teamId} key={"Champion_" + key}>
                        <ChampionImage src={process.env.REACT_APP_DDRAGON_URL + "/img/champion/" + participant.championName + ".png"} />
                        <p>{participant.level}</p>
                        <p>{participant.kills}/{participant.deaths}/{participant.assists}</p>
                        {/* <p>{Math.ceil(participant.gold)}</p> */}

                    </ChampionCard>
                )
                )}
            </ChampionCards>
        </Container>
    );
};

const Container = styled.div`
    height: 180px;
    max-height: 229px;
    padding-left: 0;
`;

const ChampionCards = styled.div`
 display: flex;
 flex-wrap: wrap;
 flex-direction: column;
    max-height: 90%;
`

const ChampionCard = styled.div<{ teamColor: number }>`
    width: 50%;
    height: 32px;
    display: flex;
    background-color: ${props => props.teamColor === 100 ? "blue" : "red"};
    /* padding: 10px; */
    box-sizing: border-box;
    align-items: center;
    p {
        margin-left: 10px;
    }
`;

const ChampionImage = styled.img`
      height: 32px; 
      min-height: 32px;
      min-width: 32px;
`;

export default TimeLineTrackers;