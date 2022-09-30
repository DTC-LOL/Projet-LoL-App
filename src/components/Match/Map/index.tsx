import React, { Component } from 'react';
import Konva from 'konva';
import axios from 'axios';
import { Stage, Layer, Circle, Image } from 'react-konva';
import useBreakpoint from '@hooks/useBreakpoints';
import styled from 'styled-components';
import { useAppSelector } from '@store/hooks';
import { MatchTimeline } from '@typesDef/matchtimeline';
import LayerKill from './LayerKills/index';
import LayerKillAram from './LayerKillsAram/index';
import LayerBuildings from './LayerBuildings/index';
import LayerBuildingsAram from './LayerBuildingsAram/index';
import { IGameTimeLine } from '@typesDef/match';

interface IProps {
	gameTimelineData: IGameTimeLine;
	gameMode: string;
}

const Map: React.FC<IProps> = ({ gameTimelineData, gameMode }) => {
	const { isTablet } = useBreakpoint();
	const selectedFilter = useAppSelector(state => state.filters.selectedFilter);
	const IsVisibleBuildings = useAppSelector(state => state.filters.isVisibleBuilding);
	return (
		<Container>
			<Canvas width={360} height={360} gameMode={gameMode}>
				{
					gameMode === "CLASSIC" &&
						<>
						<LayerBuildings isVisibleBuildings={IsVisibleBuildings} />
						<LayerKill selectedFilter={selectedFilter} frames={gameTimelineData.info.frames} /></>
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

export default Map;
