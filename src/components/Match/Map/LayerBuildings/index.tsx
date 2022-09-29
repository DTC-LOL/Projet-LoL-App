import React from 'react';
import styled from 'styled-components';
import { Stage, Layer, Circle, Image } from 'react-konva';
import useImage from 'use-image';

interface IProps {
    isVisibleBuildings: boolean;
}

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

const LayerBuildings: React.FC<IProps> = ({ isVisibleBuildings }) => {
    return (<Layer  visible={isVisibleBuildings === false ? true : false}>
        <div>
            {/* top Lane blue  building */}
				<URLImage image={{ src: '/blue-innib.png', x: 22, y: 250 }} />
				<URLImage image={{ src: '/blue-turret.png', x: 22, y: 230 }} />
				<URLImage image={{ src: '/blue-turret.png', x: 28, y: 175 }} />
				<URLImage image={{ src: '/blue-turret.png', x: 16, y: 100 }} />
			{/* mid Lane blue building */}
				<URLImage image={{ src: '/blue-innib.png', x: 72, y: 272 }} />
				<URLImage image={{ src: '/blue-turret.png', x: 85, y: 255 }} />
				<URLImage image={{ src: '/blue-turret.png', x: 115, y: 232 }} />
				<URLImage image={{ src: '/blue-turret.png', x: 135, y: 195 }} />
			{/* bot Lane blue building */}
				<URLImage image={{ src: '/blue-innib.png', x: 90, y: 321 }} />
				<URLImage image={{ src: '/blue-turret.png', x: 110, y: 321 }} />
				<URLImage image={{ src: '/blue-turret.png', x: 165, y: 315 }} />
				<URLImage image={{ src: '/blue-turret.png', x: 250, y: 327 }} />
			{/* top Lane red  building */}
				<URLImage image={{ src: '/red-innib.png', x: 260, y: 22 }} />
				<URLImage image={{ src: '/red-turret.png', x: 240, y: 22 }} />
				<URLImage image={{ src: '/red-turret.png', x: 180, y: 26 }} />
				<URLImage image={{ src: '/red-turret.png', x: 100, y: 14 }} />
			{/* mid Lane red building */}
				<URLImage image={{ src: '/red-innib.png', x: 272, y: 75 }} />
				<URLImage image={{ src: '/red-turret.png', x: 257, y: 85 }} />
				<URLImage image={{ src: '/red-turret.png', x: 228, y: 102 }} />
				<URLImage image={{ src: '/red-turret.png', x: 215, y: 140 }} />
			{/* bot Lane red building */}
				<URLImage image={{ src: '/red-innib.png', x: 325, y: 95 }} />
				<URLImage image={{ src: '/red-turret.png', x: 325, y: 105 }} />
				<URLImage image={{ src: '/red-turret.png', x: 315, y: 160 }} />
				<URLImage image={{ src: '/red-turret.png', x: 330, y: 250 }} />
		</div>
    </Layer>);
};
export default LayerBuildings;