import React from 'react';
import styled from 'styled-components';
import Map from 'components/Match/Map';
import Filters from 'components/Filters';
import getGameRecap from 'services/api/getGameRecap';
import { IGameData, IGameRecap } from 'types/match';
import { mediaQueries } from 'services/media';
import Teams from 'components/Match/Details/Teams';
import Tabs from 'components/Tabs/index';
import TimeLineTab from 'pages/Match/TimeLineTab';

import {
    useParams,
    useNavigate,
} from "react-router-dom";
import { useAppSelector } from 'store/hooks';

const Match: React.FC = () => {
    const [loading, setLoading] = React.useState(true);
    const [gameRecapData, setGameRecapData] = React.useState<any>(null);
    const [gameTimelineData, setGameTimelineData] = React.useState<any>(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const gamesDatas = useAppSelector((state) => state.gameDatas);

    React.useEffect(() => {
        if (gamesDatas.games) {
            const gameData = gamesDatas.games.find((game: IGameData) => game.uuid === id);
            setGameRecapData(gameData.recap);
            setGameTimelineData(gameData.timeline);
            setLoading(false);

        } else {
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
        }
    }, [])


    return (
        <Container>
            {
                !loading ?
                    <>
                        <Tabs tabs={[
                            // {
                            //     title: "Recap",
                            //     render: () =>
                            //         <MatchLayout>
                            //             <MatchLayoutLeftPart>
                            //                 <MapContainer>
                            //                     <Map gameTimelineData={gameTimelineData} gameMode={gameRecapData.game_mode} />
                            //                 </MapContainer>
                            //                 <Filters />
                            //             </MatchLayoutLeftPart>

                            //             <MatchLayoutRightPart>
                            //                 <DetailsContainer>
                            //                     <Teams gameRecapData={gameRecapData} />
                            //                 </DetailsContainer>
                            //             </MatchLayoutRightPart>
                            //         </MatchLayout>
                            // },
                            {
                                title: "Timeline",
                                render: () =>
                                    <TimeLineTab gameTimelineData={gameTimelineData} gameRecapData={gameRecapData} />,
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