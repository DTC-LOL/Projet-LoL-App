import React from 'react';
import { Stage } from 'react-konva';
import styled from 'styled-components';
import { useAppSelector } from 'store/hooks';
import LayerKill from './LayerKills/index';
import LayerKillAram from './LayerKillsAram/index';
import LayerBuildings from './LayerBuildings/index';
import LayerBuildingsAram from './LayerBuildingsAram/index';
import { IGameTimeLine } from 'types/match';
import useWindowSize from 'hooks/useWindowSize';
import useBreakpoints from 'hooks/useBreakpoints';

interface IProps {
	gameTimelineData: IGameTimeLine;
	gameMode: string;
	time: number;
}

const TimeLineMap: React.FC<IProps> = ({ gameTimelineData, gameMode, time }) => {
	const selectedFilter = useAppSelector(state => state.filters.selectedFilter);
	const IsVisibleBuildings = useAppSelector(state => state.filters.isVisibleBuilding);
	const {isMobile, isLandscape} = useBreakpoints();
	const windowSize = useWindowSize();

	return (
		<Container>
			{gameMode === 'CLASSIC' ? 'yep' : 'nope'}
			<Canvas width={window.innerWidth / (isMobile ? 1.25 : 2.5)} height={window.innerWidth / (isMobile ? 1.25 : 2.5)} gameMode={gameMode}>
				{
					gameMode === "ARAM" ?
						<>
							<LayerBuildingsAram time={time} frames={gameTimelineData.info.frames} isVisibleBuildings={IsVisibleBuildings} />
							<LayerKillAram time={time} selectedFilter={selectedFilter} frames={gameTimelineData.info.frames} />
						</> 
					: 
						<>
							
							<LayerBuildings time={time} isVisibleBuildings={IsVisibleBuildings} />
							<LayerKill time={time} selectedFilter={selectedFilter}   frames={gameTimelineData.info.frames} />
						</>
						
				}

			</Canvas>
		</Container>
	);
};

const Container = styled.div`
`;

const Canvas = styled(Stage)`

	.konvajs-content {
		margin: 0 auto;
		background-image: url("http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map${(props) => props.gameMode === 'ARAM' ? "12" : "11"}.png");
		background-size: contain;
    	background-repeat: no-repeat;
		max-width: 80vw;
		overflow: hidden;
	}
`;

export default TimeLineMap;
