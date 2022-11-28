import React from 'react';
import styled from 'styled-components';
import { Stage, Layer, Circle, Image } from 'react-konva';
import { IGameTimeLineFrame, IGameTimeLineFrameEvent } from 'types/match';

interface IProps {
    selectedFilter: string;
    selectedTime: number;
    frames: Array<IGameTimeLineFrame>;
}

interface IKill {
    x: number;
    y: number;
}

const division = 15000 / (window.innerWidth / 5);

const LayerKill: React.FC<IProps> = ({ selectedFilter,selectedTime, frames }) => {
    const kills: Array<IKill> = [];

    frames[selectedTime].events.forEach((event: IGameTimeLineFrameEvent) => {
        if (event.type === "CHAMPION_KILL") {
            if (event.position) {
                kills.push({ x: event.position.x, y: event.position.y });
            }
            // console.log(kills)
        }
    })

    return (
        <Layer  
         
           
            >
            {kills.length > 0 &&
                kills.map((kill, key) => (
                    <Circle
                        x={kill.x / division}
                        y={(window.innerWidth / 5) - (kill.y / division)}
                        radius={4}
                        fill="red"
                        shadowBlur={10}
                        opacity={1}
                        key={key + "zzkjztjetl"}
                    />
                ))
            }
        </Layer>
    );
};

export default LayerKill;