import React from 'react';
import styled from 'styled-components';
import Konva from 'konva';
import { Stage, Layer, Text, Circle } from 'react-konva';
import useBreakpoint from '../../hooks/useBreakpoints';

const Map: React.FC = () => {
	const {isTablet} = useBreakpoint();
	console.log('isTablet : ', isTablet);
	
	return (
		<Container width={window.innerWidth/2} height={window.innerHeight/2}>
			<Layer>
				<Circle 
					x={150} 
					y={152} 
					radius={2} 
					fill="red" 
					shadowBlur={10} 
					opacity={0.4} 
					fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
				/>
				<Text text="Try to drag a star" />
			</Layer>
		</Container>
	);
};

const Container = styled(Stage)`
  div {
    background-image: url("http://localhost:3000/summoner_rift.webp");
	background-size: contain;
    background-repeat: no-repeat;
  }
`;
export default Map;
