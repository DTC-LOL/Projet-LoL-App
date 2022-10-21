import React from 'react';
import styled from 'styled-components';
import { Stage, Layer, Circle, Image } from 'react-konva';
import { IGameTimeLineFrame, IGameTimeLineFrameEvent, IGameTimeLineParticipants } from '@typesDef/match';

interface IProps {
    selectedSummoner: string;
    frames: Array<IGameTimeLineFrame>;
    participants: Array<IGameTimeLineParticipants>;
}

interface IKill {
    x: number;
    y: number;
}

const division = 15000/(window.innerWidth/5);

const LayerDeathsByPlayer: React.FC<IProps> = ({ selectedSummoner, frames, participants }) => {
    const kills: Array<IKill> = [];
    let i = 0;

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

export default LayerDeathsByPlayer;