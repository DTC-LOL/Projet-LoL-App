import React from 'react';
import styled from 'styled-components';
import Map from 'components/Match/Map';
import Filters from 'components/Filters';
import getGameRecap from 'services/api/getGameRecap';
import { IGameData, IGameRecap } from 'types/match';
import { mediaQueries } from 'services/media';
import Teams from 'components/Match/Details/Teams';
import Tabs from 'components/Tabs/index';
import {
    useParams,
    useNavigate,
} from "react-router-dom";
import TimeLineList from 'components/Timeline/List';

import TimeLineMap from 'components/Timeline/TimelineMap';
import TimeLineRanger from 'components/Timeline/TimeLineRanger';

const Match: React.FC = () => {
    const [loading, setLoading] = React.useState(true);
    const [gameRecapData, setGameRecapData] = React.useState<any>(null);
    const [gameTimelineData, setGameTimelineData] = React.useState<any>(null);
    const { id } = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (id) {
            getGameRecap(id).then((res) => {
                const gameData: IGameData = res.data;
                setGameRecapData(gameData.recap);
                setGameTimelineData(gameData.timeline);

            }).then(() => {
                setLoading(false);
            });
        } else {
            // TODO: REDIRECTION VERS LA PAGE D'acceuil si il n'y a pas d'id fournis
            navigate("")
        }
    }, [])

    return (
        <Container>
            {

                !loading ?

                    <>

                        <Tabs tabs={[
                            {
                                title: "Recap",
                                render: () =>
                                    <MatchLayout>
                                        <MatchLayoutLeftPart>
                                            <MapContainer>
                                                <Map gameTimelineData={gameTimelineData} gameMode={gameRecapData.game_mode} />
                                            </MapContainer>
                                            <Filters />
                                        </MatchLayoutLeftPart>

                                        <MatchLayoutRightPart>
                                            <DetailsContainer>
                                                <Teams gameRecapData={gameRecapData} />
                                            </DetailsContainer>
                                        </MatchLayoutRightPart>
                                    </MatchLayout>

                            },
                            {
                                title: "Timeline",
                                render: () =>
                                    <TimeLineLayout>
                                        <TimeLineLeftPart>
                                            <TimeLineMap gameTimelineData={gameTimelineData} gameMode={gameRecapData.game_mode} />

                                        </TimeLineLeftPart>
                                        <TimeLineRightPart>
                                            <TimeLineList participants={gameRecapData.participants} gameTimelineData={gameTimelineData} />

                                        </TimeLineRightPart>
                                        <TimeLineControls>
                                            <TimeLineRanger gameTimelineLength={gameTimelineData.length} />
                                            {/* <TimeLineRangeInputContainer>
                                                <p>Minutes : {selectedTime}</p>
                                                <input onChange={handleRangeInputChange} type="range" value={selectedTime} min="1" max={gameTimelineData.info.frames.length - 1} name="" id="" />
                                            </TimeLineRangeInputContainer> */}
                                        </TimeLineControls>
                                    </TimeLineLayout>,
                            },
                        ]}

                        />

                    </>
                    : <p>Loading...</p>
            }

        </Container>
    );
};

const MatchLayout = styled.div`
    display: flex;
    flex-direction: column;

    ${mediaQueries('laptop')`
        flex-direction: row;
`}
`
const MatchLayoutLeftPart = styled.div`
    width: 100%;
    ${mediaQueries('laptop')`
        width: 50%;
    `}
`

const MatchLayoutRightPart = styled.div`
    flex: 1;
`

const TimeLineLayout = styled.div`
    display: flex;
    flex-direction: column;

    ${mediaQueries('laptop')`
        flex-direction: row;
        flex-wrap: wrap;
`}
`
const TimeLineLeftPart = styled.div`
    width: 100%;
    ${mediaQueries('laptop')`
        width: 50%;
    `}
`;

const TimeLineRightPart = styled.div`
    flex: 1;
`;

const TimeLineControls = styled.div`
    width: 100%;
`;

const Container = styled.div`

`;

const DetailsContainer = styled.div`
  ${mediaQueries('desktop')`
  `}
`;
const MapContainer = styled.div`
  ${mediaQueries('desktop')`
    display: flex;
  `}
`;

export default Match;