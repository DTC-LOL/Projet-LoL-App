import React, { Component } from 'react';
import { Stage, Layer, Circle, Image } from 'react-konva';
import useBreakpoint from '../../hooks/useBreakpoints';
import useImage from 'use-image';
import styled from 'styled-components';

const URLImage = ({ image }: any) => {
	const [img] = useImage(image.src);
	return (
		<Image
			image={img}
			x={image.x}
			y={image.y}
			width={15}
			height={15}
		/>
	);
};
  

const Map: React.FC = () => {
	const {isTablet} = useBreakpoint();
	console.log('isTablet : ', isTablet);
	
	return (
		<Container width="360" height="360">
			<Layer>
				<Test style={{visibility: 'hidden'}}>
					<div>
						{/* top Lane blue  building */}
						<URLImage image={{src: 'http://localhost:3000/blue-innib.png', x: 22, y: 250}} />
						<URLImage image={{src: 'http://localhost:3000/blue-turret.png', x: 22, y: 230}} />
						<URLImage image={{src: 'http://localhost:3000/blue-turret.png', x: 28, y: 175}} />
						<URLImage image={{src: 'http://localhost:3000/blue-turret.png', x: 16, y: 100}} />
						{/* mid Lane blue building */}
						<URLImage image={{src: 'http://localhost:3000/blue-innib.png', x: 72, y: 272}} />
						<URLImage image={{src: 'http://localhost:3000/blue-turret.png', x: 85, y: 255}} />
						<URLImage image={{src: 'http://localhost:3000/blue-turret.png', x: 115, y: 232}} />
						<URLImage image={{src: 'http://localhost:3000/blue-turret.png', x: 135, y: 195}} />
						{/* bot Lane blue building */}
						<URLImage image={{src: 'http://localhost:3000/blue-innib.png', x: 90, y: 321}} />
						<URLImage image={{src: 'http://localhost:3000/blue-turret.png', x: 110, y: 321}} />
						<URLImage image={{src: 'http://localhost:3000/blue-turret.png', x: 165, y: 315}} />
						<URLImage image={{src: 'http://localhost:3000/blue-turret.png', x: 250, y: 327}} />
						{/* top Lane red  building */}
						<URLImage image={{src: 'http://localhost:3000/red-innib.png', x: 260, y: 22}} />
						<URLImage image={{src: 'http://localhost:3000/red-turret.png', x: 240, y: 22}} />
						<URLImage image={{src: 'http://localhost:3000/red-turret.png', x: 180, y: 26}} />
						<URLImage image={{src: 'http://localhost:3000/red-turret.png', x: 100, y: 14}} />
						{/* mid Lane red building */}
						<URLImage image={{src: 'http://localhost:3000/red-innib.png', x: 272, y: 75}} />
						<URLImage image={{src: 'http://localhost:3000/red-turret.png', x: 257, y: 85}} />
						<URLImage image={{src: 'http://localhost:3000/red-turret.png', x: 228, y: 102}} />
						<URLImage image={{src: 'http://localhost:3000/red-turret.png', x: 215, y: 140}} />
						{/* bot Lane red building */}
						<URLImage image={{src: 'http://localhost:3000/red-innib.png', x: 325, y: 95}} />
						<URLImage image={{src: 'http://localhost:3000/red-turret.png', x: 325, y: 105}} />
						<URLImage image={{src: 'http://localhost:3000/red-turret.png', x: 315, y: 160}} />
						<URLImage image={{src: 'http://localhost:3000/red-turret.png', x: 330, y: 250}} />
					</div>	
				</Test>
				<Circle 
					x={150} 
					y={152} 
					radius={2} 
					fill="red" 
					shadowBlur={10} 
					opacity={0.4} 
					fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
				/>
			</Layer>
		</Container>
	);
};

const Test = styled.div`
	div{
		visibility: hidden;
	}
`;
const Container = styled(Stage)`
  div {
    background-image: url("http://localhost:3000/summoner_rift.webp");
	background-size: contain;
    background-repeat: no-repeat;
  }
`;




export default Map;
