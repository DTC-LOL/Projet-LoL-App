import React from 'react';
import styled from 'styled-components';
import { Stage, Layer, Circle, Image } from 'react-konva';
import useImage from 'use-image';
import useBreakpoints from 'hooks/useBreakpoints';

interface IProps {
	isVisibleBuildings: boolean;
	size: number;
}


const URLImage = ({ image, visible }: any) => {
	const [img] = useImage(image.src);
	const { isMobile } = useBreakpoints();

	const division = 15000 / (window.innerWidth / (isMobile ? 2 : 3.2));
	React.useEffect(() => {
		console.log('division', division);
	}, [isMobile]);
	
	return (
		<Image
			image={img}
			visible={visible}
			x={image.x / division}
			y={image.y / division}
			width={isMobile ? 15 : 30}
			height={isMobile ? 15 : 30}
		/>
	);
};

const LayerBuildings: React.FC<IProps> = ({ isVisibleBuildings }) => {
	return (
		<Layer visible={isVisibleBuildings}>
			{/* top Lane blue  building */}
			<URLImage image={{ src: '/blue-innib.png', x: 916, y: 10400 }} />
			<URLImage image={{ src: '/blue-turret.png', x: 916, y: 9568 }} />
			<URLImage image={{ src: '/blue-turret.png', x: 1165, y: 7280 }} />
			<URLImage image={{ src: '/blue-turret.png', x: 666, y: 4160 }} />
			{/* mid Lane blue building */}
			<URLImage image={{ src: '/blue-innib.png', x: 2996, y: 11315 }} />
			<URLImage image={{ src: '/blue-turret.png', x: 3536, y: 10608 }} />
			<URLImage image={{ src: '/blue-turret.png', x: 4784, y: 9652 }} />
			<URLImage image={{ src: '/blue-turret.png', x: 5616, y: 8112 }} />
			{/* bot Lane blue building */}
			<URLImage image={{ src: '/blue-innib.png', x: 3744, y: 13354 }} />
			<URLImage image={{ src: '/blue-turret.png', x: 4576, y: 13354 }} />
			<URLImage image={{ src: '/blue-turret.png', x: 6864, y: 13104 }} />
			<URLImage image={{ src: '/blue-turret.png', x: 10400, y: 13604 }} />
			{/* top Lane red  building */}
			<URLImage image={{ src: '/red-innib.png', x: 10816, y: 913 }} />
			<URLImage image={{ src: '/red-turret.png', x: 9984, y: 913 }} />
			<URLImage image={{ src: '/red-turret.png', x: 7488, y: 1082 }} />
			<URLImage image={{ src: '/red-turret.png', x: 4160, y: 583 }} />
			{/* mid Lane red building */}
			<URLImage image={{ src: '/red-innib.png', x: 11316, y: 3120 }} />
			<URLImage image={{ src: '/red-turret.png', x: 10692, y: 3586 }} />
			<URLImage image={{ src: '/red-turret.png', x: 9485, y: 4244 }} />
			<URLImage image={{ src: '/red-turret.png', x: 8944, y: 5824 }} />
			{/* bot Lane red building */}
			<URLImage image={{ src: '/red-innib.png', x: 13520, y: 3952 }} />
			<URLImage image={{ src: '/red-turret.png', x: 13520, y: 4368 }} />
			<URLImage image={{ src: '/red-turret.png', x: 13104, y: 6656 }} />
			<URLImage image={{ src: '/red-turret.png', x: 13728, y: 10400 }} />
		</Layer>);
};
export default LayerBuildings;