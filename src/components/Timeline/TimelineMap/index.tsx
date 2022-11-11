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

interface IProps {
	gameTimelineData: IGameTimeLine;
	gameMode: string;
}

const TimeLineMap: React.FC<IProps> = ({ gameTimelineData, gameMode }) => {
	const selectedFilter = useAppSelector(state => state.filters.selectedFilter);
	const IsVisibleBuildings = useAppSelector(state => state.filters.isVisibleBuilding);
	const windowSize = useWindowSize();

	// React.useEffect(() => {
	// 	console.log('breakpoint', windowSize);
	// }, [windowSize]);



	return (
		<Container>
			<Canvas width={windowSize.width} height={windowSize.width} gameMode={gameMode}>
				{
					gameMode === "CLASSIC" &&
					<>
						<LayerBuildings isVisibleBuildings={true} />
						<LayerKill selectedFilter={selectedFilter} selectedTime={1} frames={gameTimelineData.info.frames} />
					</>
				}
				{
					gameMode === "ARAM" &&
					<>
						<LayerBuildingsAram isVisibleBuildings={IsVisibleBuildings} />
						<LayerKillAram selectedFilter={selectedFilter} frames={gameTimelineData.info.frames} /></>
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
`;

export default TimeLineMap;
