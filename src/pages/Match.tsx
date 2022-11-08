import React from 'react';
import styled from 'styled-components';
import Map from '@components/Match/Map';
import Filters from '@components/Filters';
import getGameRecap from '@services/api/getGameRecap';
import { IGameData } from '@typesDef/match';
import { mediaQueries } from '@services/media';
import Teams from '@components/Match/Details/Teams';
import Tabs from '@components/Tabs/index';
import {
    useParams,
    useNavigate,
} from "react-router-dom";
import TimeLineList from '@components/Timeline/List';
import Wrapper from '@components/Layout/Wrapper';
import TimeLineMap from '@components/Timeline/TimelineMap';

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

                                            <DetailsContainer>
                                                <Teams gameRecapData={gameRecapData}>

                                                    <InnerContainer className={"innerContainer"}>
                                                        <MapContainer>
                                                            <Map gameTimelineData={gameTimelineData} gameMode={gameRecapData.game_mode} />
                                                        </MapContainer>
                                                        <Filters />
                                                    </InnerContainer>

                                                </Teams>

                                            </DetailsContainer>

                                        </MatchLayout>
                        },
                            {
                                title: "Timeline",
                                render: () =>
                                    <Wrapper>
                                        <TimeLineMap gameTimelineData={gameTimelineData} gameMode={gameRecapData.game_mode} />
                                        <TimeLineList participants={gameRecapData.participants} gameTimelineData={gameTimelineData} />
                                    </Wrapper>,
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

const Container = styled.div`
`;

const InnerContainer = styled.div`
    width: 75%;
    @media (max-width: 820px) {
        order: -1;
        width: 100%;
    }
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