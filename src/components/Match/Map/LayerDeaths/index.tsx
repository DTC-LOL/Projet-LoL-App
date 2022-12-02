import React from 'react';
import styled from 'styled-components';
import { Stage, Layer, Circle, Image } from 'react-konva';
import { IGameTimeLineFrame, IGameTimeLineFrameEvent } from 'types/match';
import useBreakpoints  from 'hooks/useBreakpoints';

interface IProps {
    selectedFilter: string;
    frames: Array<IGameTimeLineFrame>;
}

interface IKill {
    x: number;
    y: number;
}


const LayerDeaths: React.FC<IProps> = ({ selectedFilter, frames }) => {
    const kills: Array<IKill> = [];
    const { isMobile } = useBreakpoints();
    const division = 15000/(window.innerWidth / (isMobile ? 1.25 : 3.2));

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
                        y={(window.innerWidth/(isMobile ? 1.25 : 3.2) - (kill.y / division))}
                        radius={isMobile ? 4 : 8}
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