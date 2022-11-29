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


const LayerKillAram: React.FC<IProps> = ({ selectedFilter, frames, size }) => {
    const kills: Array<IKill> = [];
    const division= 13000/(window.innerWidth/size);


    frames.forEach((frame) => {
        frame.events.forEach((event: IGameTimeLineFrameEvent) => {
            if (event.type === "CHAMPION_KILL" || event.type === "CHAMPION_SPECIAL_KILL") {
                if (event.position) {
                    kills.push({ x: event.position.x, y: event.position.y });
                }
            }
        })
    })

    return (
        <Layer visible={selectedFilter === "kills" ? true : false}>
            {kills.length > 0 &&
                kills.map((kill, key) => (
                    <Circle
                        x={(kill.x /division)}
                        y={(division) - (kill.y / division)}
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

export default LayerKillAram;