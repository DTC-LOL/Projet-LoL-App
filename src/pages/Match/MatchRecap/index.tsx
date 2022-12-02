import React from 'react';
import styled, { keyframes } from 'styled-components';
import Map from 'components/Match/Map';
import Filters from 'components/Filters';
import { IGameRecap, IGameTimeLine } from 'types/match';
import Teams from 'components/Match/Details/Teams';
import { mediaQueries } from 'services/media';
import {setActiveFilter, setSelectedSummoner, setIsVisibleBuilding} from "store/features/filters/filtersSlice";
import { useAppSelector, useAppDispatch } from 'store/hooks';

interface IProps {
    gameTimelineData : IGameTimeLine;
	gameRecapData: IGameRecap;
}


const MatchRecap: React.FC<IProps> = ({ gameTimelineData, gameRecapData}) => {
    const dispatch = useAppDispatch();


    React.useEffect(() => {
        console.log("load");
        dispatch(setActiveFilter(""));
        dispatch(setSelectedSummoner(""));
        dispatch(setIsVisibleBuilding(false));
        return (() => {
            console.log("unload");
            dispatch(setActiveFilter(""));
            dispatch(setSelectedSummoner(""));
            dispatch(setIsVisibleBuilding(false));
        })
    })

    return(
        <MatchLayout>
            <DetailsContainer>
                <Teams gameTimelineData={gameTimelineData} gameRecapData={gameRecapData}>

                    <InnerContainer className={"innerContainer"}>
                        <MapContainer>
                            <Map gameTimelineData={gameTimelineData} gameMode={gameRecapData.game_mode} size={window.innerWidth} />
                        </MapContainer>
                        <Filters />
                    </InnerContainer>

                </Teams>
            </DetailsContainer>
        </MatchLayout>
    )
    
}



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
    @media (max-width: 820px) {
        grid-column: 1 / span 2; 
        grid-row: 1 
    }
`;

const DetailsContainer = styled.div`
      ${mediaQueries('desktop')`
      `}
`;
const MapContainer = styled.div`
        display: flex;
        justify-content: center;
`;

export default MatchRecap;