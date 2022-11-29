import React from 'react';
import styled from 'styled-components';
import { Stage, Layer, Circle, Image } from 'react-konva';
import { IGameTimeLineFrame, IGameTimeLineFrameEvent } from 'types/match';

interface IProps {
    selectedFilter: string;
    frames: Array<IGameTimeLineFrame>;
    size: number;
}

interface IKill {
    x: number;
    y: number;
}



const LayerDeaths: React.FC<IProps> = ({ selectedFilter, frames, size }) => {
    const kills: Array<IKill> = [];
    const division = 15000/(window.innerWidth/size);


    frames.forEach((frame) => {
        frame.events.forEach((event: IGameTimeLineFrameEvent) => {
            if ((event.type === "CHAMPION_KILL" && 
                event.killerId === 6 || 
                event.killerId === 7 || 
                event.killerId === 8 || 
                event.killerId === 9 ||
                event.killerId === 10 ) || 
                (event.type === "CHAMPION_SPECIAL_KILL" &&
                event.killerId === 6 ||
                event.killerId === 7 ||
                event.killerId === 8 ||
                event.killerId === 9 ||
                event.killerId === 10)) {
                if (event.position) {
                    kills.push({ x: event.position.x, y: event.position.y });
                }
            }
        })
    })

    return (
        <Layer visible={selectedFilter === "Rkills" ? true : false}>
            {kills.length > 0 &&
                kills.map((kill, key) => (
                    <Circle
                        x={kill.x / division}
                        y={(window.innerWidth/5) - (kill.y / division)}
                        radius={4}
                        fill="red"
                        shadowBlur={10}
                        opacity={0.5}
                        key={key + "zzkjztjetl"}
                    />
                ))
            }
        </Layer>
    );
};

export default LayerDeaths;