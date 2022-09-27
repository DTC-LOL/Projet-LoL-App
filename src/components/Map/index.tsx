import React from 'react';
import styled from 'styled-components';
import Konva from 'konva';
import { Stage, Layer, Text } from 'react-konva';
import useBreakpoint from '../../hooks/useBreakpoints';

const Map: React.FC = () => {
	const {isTablet} = useBreakpoint();
	console.log('isTablet : ', isTablet);
	
	return (
		<Container width={isTablet ? 600 : window.innerWidth} height={isTablet ? 600 : window.innerHeight}>
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
