import React from 'react';
import styled from 'styled-components';
import { Stage, Layer, Circle, Image } from 'react-konva';
import { IGameTimeLineFrame, IGameTimeLineFrameEvent, IGameTimeLineParticipants } from 'types/match';
import useBreakpoints  from 'hooks/useBreakpoints';

interface IProps {
    selectedSummoner: string;
    frames: Array<IGameTimeLineFrame>;
    participants: Array<IGameTimeLineParticipants>;
    size: number;
}

interface IKill {
    x: number;
    y: number;
}



const LayerDeathsByPlayer: React.FC<IProps> = ({ selectedSummoner, frames, participants, size }) => {
    const kills: Array<IKill> = [];
    let i = 0;
    const { isMobile } = useBreakpoints();
    const division = 15000/(window.innerWidth / (isMobile ? 2 : 3.2));

    participants.forEach((participant) => {
        participant.puuid === selectedSummoner ? i = participant.participantId : null;
    })

    frames.forEach((frame) => {
        frame.events.forEach((event: IGameTimeLineFrameEvent) => {
            if ((event.type === "CHAMPION_KILL" &&
            event.victimId === i) || 
            (event.type === "CHAMPION_SPECIAL_KILL" &&
            event.victimId === i )) {
                if (event.position) {
                    kills.push({ x: event.position.x, y: event.position.y });
                }
            }
        })
    })

    return (
        <Layer visible={selectedSummoner != "" ? true : false}>
            {kills.length > 0 &&
                kills.map((kill, key) => (
                    <Circle
                        x={kill.x / division}
                        y={(window.innerWidth/(isMobile ? 2 : 3.2)) - (kill.y / division)}
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

export default LayerDeathsByPlayer;