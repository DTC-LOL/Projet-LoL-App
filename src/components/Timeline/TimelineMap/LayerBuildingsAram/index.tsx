import React from 'react';
import styled from 'styled-components';
import { Stage, Layer, Circle, Image } from 'react-konva';
import useImage from 'use-image';
import useBreakpoints from 'hooks/useBreakpoints';
import { IGameTimeLineFrame } from 'types/match';
import { mergeArrays } from 'utils/mergeArray';

interface IProps {
    isVisibleBuildings: boolean;
	time: number;
	frames: Array<IGameTimeLineFrame>;
}

const URLImage = ({ image, visible }: any) => {
	const [img] = useImage(image.src);
	const { isMobile } = useBreakpoints();
	const division = 13000/(window.innerWidth / (isMobile ? 1.25 : 2.5));

	React.useEffect(() => {
		console.log('division', division);
	}, [isMobile]);

	return (
		<Image
			image={img}
			visible={visible}
			x={image.x/division}
			y={(window.innerWidth/(isMobile ? 1.25 : 2.5)) - (image.y/division)}
			width={isMobile ? 15 : 30}
			height={isMobile ? 15 : 30}
		/>
	);
};

const LayerBuildingsAram: React.FC<IProps> = ({ isVisibleBuildings, time, frames }) => {

	const filterBuildings = (array: any) => {
		return array.filter((item: any) => item.type === "BUILDING_KILL" && item.timestamp <= time);
	}

	const findItemInArray = (array: any, properties: any) => {
		return array.find((item: any) => Object.keys(properties).every(key => item[key] === properties[key]));
	}

	const events = filterBuildings(mergeArrays(frames));
	console.log(events)
	
    return (
		<Layer visible={isVisibleBuildings === false ? true : false}>
				<Circle x={0} y={0} fill="red" radius={20} />
				{/* mid Lane blue building */}
					<URLImage image={{ src: '/blue-turret.png', x: 1986, y: 2120}} />
					<URLImage image={{ src: '/blue-turret.png', x: 1511, y: 2585}} />
					<URLImage image={{ src: '/blue-innib.png', x: 2670, y: 3196}} />
					<URLImage visible={findItemInArray(events,{teamId: 200, towerType: "OUTTER_TURRET"})} image={{ src: '/blue-turret.png', x: 3727, y: 4441}} />
					<URLImage visible={findItemInArray(events,{teamId: 200, towerType: "OUTTER_TURRET"})} image={{ src: '/blue-turret.png', x: 4543, y: 5229}} />
				{/* mid Lane red building */}
					<URLImage image={{ src: '/red-turret.png', x:10984, y: 11309}} />
					<URLImage image={{ src: '/red-turret.png', x:10537, y: 11574}} />
					<URLImage image={{ src: '/red-innib.png', x: 10096, y: 10644}} />
					<URLImage image={{ src: '/red-turret.png', x: 8802, y: 9450 }} />
					<URLImage image={{ src: '/red-turret.png', x: 7885, y: 8573 }} />
		
		</Layer>
		);
};
export default LayerBuildingsAram;