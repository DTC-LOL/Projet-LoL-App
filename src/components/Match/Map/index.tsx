import React, { Component } from 'react';
import Konva from 'konva';
import axios from 'axios';
import { Stage, Layer, Circle, Image } from 'react-konva';
import useBreakpoint from '@hooks/useBreakpoints';
import styled from 'styled-components';
import { useAppSelector } from '@store/hooks';
import { MatchTimeline } from '@typesDef/matchtimeline';
import LayerKill from './LayerKills/index';
import LayerBuildings from './LayerBuildings/index';
import { IGameTimeLine } from '@typesDef/match';

interface IProps {
	gameTimelineData: IGameTimeLine;
}

const Map: React.FC<IProps> = ({ gameTimelineData }) => {
	const { isTablet } = useBreakpoint();
	const selectedFilter = useAppSelector(state => state.filters.selectedFilter);
	const IsVisibleBuildings = useAppSelector(state => state.filters.isVisibleBuilding);
	//const gameTimelineData = 
	return (
		<Container>
			<Canvas width={360} height={360}>
				{/* Couche Batîments  */}
				<LayerBuildings isVisibleBuildings={IsVisibleBuildings} />
				{/* Couche Kills */}
				<LayerKill selectedFilter={selectedFilter} frames={gameTimelineData.info.frames} />
			</Canvas>
		</Container>
	);
};

const Container = styled.div`
 
`;

const Canvas = styled(Stage)`
	background-image: url("/summoner_rift.webp");
	background-size: contain;
    background-repeat: no-repeat;
`;

const Filter = styled.div`

`




export default Map;
