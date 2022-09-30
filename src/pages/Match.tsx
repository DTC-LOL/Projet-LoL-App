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

const Match: React.FC = () => {
    const [loading, setLoading] = React.useState(true);
    const [gameRecapData, setGameRecapData] = React.useState<any>(null);
    const [gameTimelineData, setGameTimelineData] = React.useState<any>(null);
    const { id } = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (id) {
            getGameRecap(id).then((res) => {
                console.log("data fetched !");

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
                                render: () => <>
                                    <MapContainer>
                                        <Map gameTimelineData={gameTimelineData} />
                                        <Filters />
                                    </MapContainer>

                                    <DetailsContainer>
                                        <Teams gameRecapData={gameRecapData} />
                                    </DetailsContainer>


                                </>,
                            },
                            {
                                title: "Timeline",
                                render: () => <></>,
                            },
                        ]}

                        />

                    </>
                    : <p>Loading...</p>
            }

        </Container>
    );
};

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