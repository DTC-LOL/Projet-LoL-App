import React from 'react';
import styled from 'styled-components';
import { Stage, Layer, Circle, Image } from 'react-konva';
import { IGameTimeLineFrame, IGameTimeLineFrameEvent } from 'types/match';
import useBreakpoints  from 'hooks/useBreakpoints';

interface IProps {
    selectedFilter: string;
    frames: Array<IGameTimeLineFrame>;
    time: number;
}

interface IKill {
    timestamp: number;
    x: number;
    y: number;
}


const LayerKill: React.FC<IProps> = ({ time, selectedFilter, frames }) => {
    const kills: Array<IKill> = [];
    const { isMobile } = useBreakpoints();
    const division = 15000/(window.innerWidth / (isMobile ? 1.25 : 2.5));

    frames.forEach((frame) => {
        frame.events.forEach((event: IGameTimeLineFrameEvent) => {
            if (event.type === "CHAMPION_KILL") {
                if (event.killerId) {
                    const team = event.killerId > 5 ? "Rkills" : "Bkills";
                    if (event.position && team === selectedFilter) {
                        kills.push({timestamp:  event.timestamp, x: event.position.x, y: event.position.y });
                    }
                }
                
            } 
        })
    })

    const opacity = (timestamp: number) => {
        const timeDiff = time - timestamp;
        if (timeDiff < 20000) {
            return 1;
        } else if (timeDiff < 40000) {
            return 0.8;
        } else if (timeDiff < 60000) {
            return 0.6;
        } else if (timeDiff < 80000) {
            return 0.4;
        } else if (timeDiff < 10000) {
            return 0.2;
        } else {
            return 0;
        }
    }

    return (
        <Layer  
         
           
            >
            {kills.length > 0 &&
                kills.map((kill, key) => (
                    <Circle
                        x={kill.x / division}
                        y={(window.innerWidth/(isMobile ? 1.25 : 2.5) - (kill.y / division))}
                        radius={isMobile ? 4 : 8}
                        fill={selectedFilter === "Rkills" ? "red" : "blue"}
                        shadowBlur={10}
                        opacity={kill.timestamp <= time ? opacity(kill.timestamp) : 0}
                        key={key + "zzkjztjetl"}
                    />
                ))
            }
        </Layer>
    );
};

export default LayerKill;