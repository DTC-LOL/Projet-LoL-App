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

const TimeLineRangeInputContainer = styled.div`
    width: 100%;  
    color: #fff;
    
    input[type=range] {

  -webkit-appearance: none;

    margin-top: 10px;
  width: 100%;
  ${mediaQueries('laptop')`
      min-width: 400px;

      max-width: 400px;
  `}
}

input[type=range]:focus {
  outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 20px;
  cursor: pointer;
  animate: 0.2s;

  background: #363636;
  border-radius: 0px;
}

input[type=range]::-webkit-slider-thumb {

  height: 30px;
  width: 30px;
  border-radius: 50px;
  background: #DD0054;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -4px;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: #363636;
}

input[type=range]::-moz-range-track {
  width: 100%;
  height: 20px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #000000;
  background: #363636;
  border-radius: 0px;
  border: 1px solid #000000;
}

input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000;
  border: 1px solid #000000;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  background: #DD0054;
  cursor: pointer;
}

input[type=range]::-ms-track {
  width: 100%;
  height: 20px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

input[type=range]::-ms-fill-lower {
  background: #363636;
  border: 1px solid #000000;
  border-radius: 0px;
  box-shadow: 1px 1px 1px #000000;
}

input[type=range]::-ms-fill-upper {
  background: #363636;
  border: 1px solid #000000;
  border-radius: 0px;
  box-shadow: 1px 1px 1px #000000;
}

input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 1px 1px 1px #000000;
  border: 1px solid #000000;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  background: #DD0054;
  cursor: pointer;
}

input[type=range]:focus::-ms-fill-lower {
  background: #363636;
}

input[type=range]:focus::-ms-fill-upper {
  background: #363636;
}

`;
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