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

const LayerBuildingsAram: React.FC<IProps> = ({ isVisibleBuildings }) => {
    return (<Layer  visible={isVisibleBuildings === false ? true : false}>
        <div>
			{/* mid Lane blue building */}
				<URLImage image={{ src: '/blue-turret.png', x: 1986/36.1, y: 360 - (2120/36.1) }} />
				<URLImage image={{ src: '/blue-turret.png', x: 1511/36.1, y: 360 - (2585/36.1) }} />
				<URLImage image={{ src: '/blue-innib.png', x: 2670/36.1, y: 360 - (3196/36.1) }} />
				<URLImage image={{ src: '/blue-turret.png', x: 3727/36.1, y: 360 - (4441/36.1) }} />
				<URLImage image={{ src: '/blue-turret.png', x: 4543/36.1, y: 360 - (5229/36.1) }} />
			{/* mid Lane red building */}
				<URLImage image={{ src: '/red-turret.png', x:10984/36.1, y: 360 - (11309/36.1) }} />
				<URLImage image={{ src: '/red-turret.png', x: 10537/36.1, y: 360 - (11574/36.1) }} />
				<URLImage image={{ src: '/red-innib.png', x: 10096/36.1, y: 360 - (10644/36.1) }} />
				<URLImage image={{ src: '/red-turret.png', x: 8802/36.1, y: 360 - (9450/36.1) }} />
				<URLImage image={{ src: '/red-turret.png', x: 7885/36.1, y: 360 - (8573/36.1) }} />
		</div>
    </Layer>);
};
export default LayerBuildingsAram;