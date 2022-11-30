import React, { Component } from 'react';
import { Stage, Layer, Circle, Image } from 'react-konva';
import styled from 'styled-components';
import { useAppSelector } from 'store/hooks';
import LayerKill from './LayerKills/index';
import LayerKillAram from './LayerKillsAram/index';
import LayerBuildings from './LayerBuildings/index';
import LayerBuildingsAram from './LayerBuildingsAram/index';
import LayerKillsByPlayer from './LayerKillsByPlayer/index';
import LayerDeaths from './LayerDeaths';
import LayerDeathsByPlayer from './LayerDeathsByPlayer/index';
import { IGameTimeLine } from 'types/match';
import useBreakpoints from 'hooks/useBreakpoints';


interface IProps {
	gameTimelineData: IGameTimeLine;
	gameMode: string;
	size: number;
}

const Map: React.FC<IProps> = ({ gameTimelineData, gameMode, size }) => {
	const selectedFilter = useAppSelector((state: { filters: { selectedFilter: any; }; }) => state.filters.selectedFilter);
	const IsVisibleBuildings = useAppSelector((state: { filters: { isVisibleBuilding: any; }; }) => state.filters.isVisibleBuilding);
	const selectedSummoner = useAppSelector((state: { filters: { selectedSummoner: any; }; }) => state.filters.selectedSummoner);
	const { isMobile } = useBreakpoints();
	const division = isMobile ? 2 : 3.2;

	return (
		<Container>		
			<Canvas gameMode={gameMode} width={window.innerWidth / (isMobile ? 2 : 3.2)} height={window.innerWidth / (isMobile ? 2 : 3.2)} >
				{
					gameMode === "ARAM" ? 
						<>
						<LayerBuildingsAram isVisibleBuildings={IsVisibleBuildings}/>
						<LayerKillAram selectedFilter={selectedFilter} frames={gameTimelineData.info.frames} />
						</>
						: 
						<>
						<LayerBuildings isVisibleBuildings={IsVisibleBuildings} />
						<LayerKill selectedFilter={selectedFilter} frames={gameTimelineData.info.frames}/>
						<LayerDeaths selectedFilter={selectedFilter} frames={gameTimelineData.info.frames} />
						<LayerKillsByPlayer selectedSummoner={selectedSummoner} frames={gameTimelineData.info.frames} participants={gameTimelineData.info.participants} />
						<LayerDeathsByPlayer selectedSummoner={selectedSummoner} frames={gameTimelineData.info.frames} participants={gameTimelineData.info.participants}/>
						</>
				}
			</Canvas>
		</Container>
	);
};

const Container = styled.div`
 
`;



const Canvas = styled(Stage)`
	background-image: url("http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map${(props) => props.gameMode === 'ARAM' ? "12" : "11"}.png");
	background-size: contain;
    background-repeat: no-repeat;
	width: ${props => props.size/3.2}px;
	height: ${props => props.size/3.2}px;
    @media screen and (max-width: 768px) {
    	width: ${props => props.size/2}px;
		height: ${props => props.size/2}px;
    }
`;

const Filter = styled.div`

`

export default Map;
