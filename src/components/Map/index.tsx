import React from 'react';
import styled from 'styled-components';
import Konva from 'konva';
import { Stage, Layer, Text } from 'react-konva';
import axios from 'axios';
import useBreakpoint from '../../hooks/useBreakpoints';

const Map: React.FC = () => {
	const {isTablet} = useBreakpoint();
	console.log('isTablet : ', isTablet);

	// fetch game by uuid
	axios.get('http://localhost:8000/api/game?uuid=EUW1_6081248019', {
		headers: {
			'content-type': 'application/json',
		}
	}).then((response) => {
		console.log(response);
	}).catch((error) => {
		console.log(error);
	});

	// fetch player by name
	axios.get('http://localhost:8000/api/player?name=qrab', {
		headers: {
			'content-type': 'application/json',
		}
	}).then((response) => {
		console.log(response);
	}).catch((error) => {
		console.log(error.message);
	});
	
	return (
		<Container width={isTablet ? 600 : 300} height={isTablet ? 600 : 300}>
			<Layer>
				<Text text="Try to drag a star" />
			</Layer>
		</Container>
	);
};

const Container = styled(Stage)`
  div {
    background-image: url("http://localhost:3000/summoner_rift.webp");
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
export default Map;
