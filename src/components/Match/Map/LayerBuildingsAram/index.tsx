import React from 'react';
import styled from 'styled-components';
import { Stage, Layer, Circle, Image } from 'react-konva';
import useImage from 'use-image';

interface IProps {
    isVisibleBuildings: boolean;
	size: number;
}


const URLImage = ({ image, size }: any) => {
	const [img] = useImage(image.src);

	const division = 13000/(window.innerWidth/size);

	return (
		<Image
			image={img}
			x={image.x/division}
			y={(window.innerWidth/5) - (image.y/division)}
			width={15}
			height={15}
		/>
	);
};

const LayerBuildingsAram: React.FC<IProps> = ({ isVisibleBuildings }) => {
    return (<Layer  visible={isVisibleBuildings === false ? true : false}>
        <div>
			{/* mid Lane blue building */}
				<URLImage image={{ src: '/blue-turret.png', x: 1986, y: 2120}} />
				<URLImage image={{ src: '/blue-turret.png', x: 1511, y: 2585}} />
				<URLImage image={{ src: '/blue-innib.png', x: 2670, y: 3196}} />
				<URLImage image={{ src: '/blue-turret.png', x: 3727, y: 4441}} />
				<URLImage image={{ src: '/blue-turret.png', x: 4543, y: 5229}} />
			{/* mid Lane red building */}
				<URLImage image={{ src: '/red-turret.png', x:10984, y: 11309}} />
				<URLImage image={{ src: '/red-turret.png', x:10537, y: 11574}} />
				<URLImage image={{ src: '/red-innib.png', x: 10096, y: 10644}} />
				<URLImage image={{ src: '/red-turret.png', x: 8802, y: 9450 }} />
				<URLImage image={{ src: '/red-turret.png', x: 7885, y: 8573 }} />
		</div>
    </Layer>);
};
export default LayerBuildingsAram;