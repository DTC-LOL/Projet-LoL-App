import { IGameTimeLineFrameEvent, IParticipant } from "types/match";
import React from "react";
import styled from 'styled-components';

const killsSeries = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const getMonsterTextByIsType = (event: IGameTimeLineFrameEvent) => {

    switch (event.monsterType) {
        case "DRAGON":
            switch (event.monsterSubType) {
                case "FIRE_DRAGON":
                    return (
                        <p>dragon de feu</p>
                    )
                    break;

                default:
                    break;
            }

            break;

        default:
            break;
    }
}



export const valueSelectorByType = (event: IGameTimeLineFrameEvent, participants: IParticipant[]) => {
    switch (event.type) {
        case "ITEM_PURCHASED":
            if (event.participantId) {
                return (
                    <>
                        <Thumbnail src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" + participants[event.participantId - 1].championName + ".png"} />
                        <TimeLineListItemText>{participants[event.participantId - 1].summonerName} a acheté </TimeLineListItemText>
                        <Thumbnail src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/" + event.itemId + ".png"} />
                    </>
                );
            }
            break;
        case "ITEM_UNDO":
            if (event.participantId) {
                return (
                    <>
                        <Thumbnail src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" + participants[event.participantId - 1].championName + ".png"} />
                        <TimeLineListItemText>{participants[event.participantId - 1].summonerName} a vendu </TimeLineListItemText>
                        <Thumbnail src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/" + event.beforeId + ".png"} />
                    </>
                );
            }
            break;
        case "CHAMPION_KILL":
            if (event.killerId && event.victimId) {
                return (
                    <>
                        <Thumbnail src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" + participants[event.killerId - 1].championName + ".png"} />
                        <TimeLineListItemText>{participants[event.killerId - 1].summonerName} a tué {participants[event.victimId - 1].summonerName}</TimeLineListItemText>
                        <Thumbnail src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" + participants[event.victimId - 1].championName + ".png"} />
                    </>
                );
            }
            break;

        case "CHAMPION_SPECIAL_KILL":
            if (event.killerId) {
                switch (event.killType) {
                    case "KILL_FIRST_BLOOD":
                        return (
                            <>
                                <Thumbnail src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" + participants[event.killerId - 1].championName + ".png"} />
                                <TimeLineListItemText>{participants[event.killerId - 1].summonerName} a effectué le premier sang</TimeLineListItemText>
                                <Placeholder />
                            </>
                        );
                        break;
                    case "KILL_MULTI":
                        killsSeries[event.killerId] += 1;
                        return (
                            <>
                                <Thumbnail src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" + participants[event.killerId - 1].championName + ".png"} />
                                <TimeLineListItemText>
                                    a reussi un
                                    {/*TODO: Ajouter le killstreak. 
                                        ex: DOublé TRIPlé QuaDruPlé 
                                    */}
                                </TimeLineListItemText>
                                <Placeholder />

                            </>
                        );
                    case "KILL_ACE":
                        return (
                            <>
                                <Thumbnail src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" + participants[event.killerId - 1].championName + ".png"} />
                                <TimeLineListItemText>{participants[event.killerId - 1].summonerName} a reussi un ace</TimeLineListItemText>
                                <Placeholder />
                            </>
                        );
                    default:
                        break;
                }
            }
            break;

        case "TURRET_PLATE_DESTROYED":
            if (event.killerId !== undefined) {
                return (
                    <>
                        {/* <Thumbnail src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" + participants[event.killerId - 1].championName + ".png"} /> */}

                        <TimeLineListItemText>
                            PLAQUE Détruite
                        </TimeLineListItemText>
                        <Placeholder />
                    </>
                );
            }
            break;

        case "BUILDING_KILL":
            // console.log(event);
            if (event.killerId !== undefined) {
                return (
                    <>
                        {/* TODO: FIXER L'AFFICHAGE DE LA THUMBNAIL DU DESTRUCTEUR DE LA TURRET 
                            <Thumbnail src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" + event.killerId !== '10' ? participants[event.killerId].championName : ""  + ".png"} /> 
                            Sachant que le destructeur de la tour portant l'id 10 est un sbire
                       */}
                        <TimeLineListItemText>
                            TOURRELLE Détruite
                            {/* 
                            TODO: Voir pour ajouter/fix l'id du destructeur du batiment afin d'afficher un beau message. 
                                ex: Qrab a détruit la tourelle 1 du mid 
                            */}

                        </TimeLineListItemText>
                        <Placeholder />
                    </>
                );
            }
            break;

        case "ELITE_MONSTER_KILL":
            if (event.killerId !== undefined) {
                return (
                    <>
                        <Thumbnail src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" + participants[event.killerId - 1].championName + ".png"} />
                        <TimeLineListItemText>
                            <>
                                a tué le {getMonsterTextByIsType(event)}
                                {/*TODO: Ajouter le killstreak. 
                                ex: DOublé TRIPlé QuaDruPlé 
                            */}
                            </>
                        </TimeLineListItemText>
                        <Placeholder />

                    </>
                );
            }
            break;

        case "WARD_PLACED":
            if (event.creatorId) {
                if (event.wardType !== "UNDEFINED") {
                    return (
                        <>
                            <Thumbnail src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" + participants[event.creatorId - 1].championName + ".png"} />
                            <TimeLineListItemText>{participants[event.creatorId - 1].summonerName} a placé/utilisé une ward </TimeLineListItemText>
                            <Thumbnail src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/" + participants[event.creatorId - 1].item6 + ".png"} />
                        </>
                    );
                }

            }
            break;

        case "WARD_KILL":

            switch (event.wardType) {
                case "TEEMO_MUSHROOM":
                    // console.log(event)
                    if (event.killerId) {
                        return (
                            <>
                                <Thumbnail src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" + participants[event.killerId - 1].championName + ".png"} />
                                <TimeLineListItemText>{participants[event.killerId - 1].summonerName} a détruit une ward </TimeLineListItemText>
                                <Thumbnail src={"https://ddragon.leagueoflegends.com/cdn/12.18.1/img/spell/FlashFrost.png"} />
                            </>
                        );
                    } else {
                        break;
                    }
                
                default:
                    break;
            }

            break;
        case "GAME_END":
            return (
                <>
                    <Placeholder />
                    <TimeLineListItemText>{event.winningTeam == 100 ? "Blue team win" : "Red team win"}</TimeLineListItemText>
                    <Placeholder />

                </>
            );
        default:
            // console.log('event : ', event);
            break;
    }
}

const Placeholder = styled.div`
    width: 48px;
    height: 48px;  
`

const Thumbnail = styled.img`
    width: 48px;
    height: 48px;  
`;

const TimeLineListItemText = styled.p`
    min-width: 210px;
    max-width: 210px;
    margin: 0;
`