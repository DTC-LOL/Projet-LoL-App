import React, { Component } from 'react';
import { Stage, Layer, Circle, Image } from 'react-konva';
import useBreakpoint from '@hooks/useBreakpoints';
import styled from 'styled-components';
import { useAppSelector } from '@store/hooks';
import LayerKill from './LayerKills/index';
import LayerKillAram from './LayerKillsAram/index';
import LayerBuildings from './LayerBuildings/index';
import LayerBuildingsAram from './LayerBuildingsAram/index';
import { IGameTimeLine } from '@typesDef/match';

interface IProps {
	gameTimelineData: IGameTimeLine;
	gameMode: string;
}

const TimeLineMap: React.FC<IProps> = ({ gameTimelineData, gameMode }) => {
	const selectedFilter = useAppSelector(state => state.filters.selectedFilter);
	const IsVisibleBuildings = useAppSelector(state => state.filters.isVisibleBuilding);
	const selectedTime = useAppSelector(state => state.timeline.selectedTime);

	return (
		<Container>
			<Canvas width={window.innerWidth/5} height={window.innerWidth/5} gameMode={gameMode}>
				{
					gameMode === "CLASSIC" &&
						<>
						<LayerBuildings isVisibleBuildings={IsVisibleBuildings} />
						<LayerKill selectedFilter={selectedFilter} selectedTime={selectedTime} frames={gameTimelineData.info.frames} />
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

const Filter = styled.div`

`

export default TimeLineMap;
