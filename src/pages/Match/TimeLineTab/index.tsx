import React from 'react';
import { mediaQueries } from 'services/media';
import styled from 'styled-components';
interface IProps {
    gameTimelineData: IGameTimeLine,
    gameRecapData: IGameRecap
}
import TimeLineMap from 'components/Timeline/TimelineMap';
import TimeLineEventsList from 'components/Timeline/List';
import MediaPlayer from 'components/Timeline/MediaPlayer';
import TimeLineTrackers from 'components/Timeline/Tracker';
import Tabs from '../../../components/Tabs/index';
import Filters from 'components/Filters';
import { IGameRecap, IGameTimeLine } from 'types/match';
import useBreakpoints from 'hooks/useBreakpoints';
import {setActiveFilter, setSelectedSummoner, setIsVisibleBuilding} from "store/features/filters/filtersSlice";
import { useAppSelector, useAppDispatch } from 'store/hooks';

const TimeLineTab: React.FC<IProps> = ({ gameTimelineData, gameRecapData }) => {
    const [time, setTime] = React.useState(0);
    const {isMobile} = useBreakpoints();
    const dispatch = useAppDispatch();
    
    React.useEffect(() => {
        dispatch(setActiveFilter(""));
        dispatch(setSelectedSummoner(""));
        dispatch(setIsVisibleBuilding(false));
        return (() => {
            dispatch(setActiveFilter(""));
            dispatch(setSelectedSummoner(""));
            dispatch(setIsVisibleBuilding(false));
        })
    })
    
    return (
        <Container>
            <TimeLineLeftPart>
                <TimeLineMap time={time} gameTimelineData={gameTimelineData} gameMode={gameRecapData.game_mode} />
            </TimeLineLeftPart>
            <TimeLineControls>
                <MediaPlayer time={time} handleRangerChange={(value) => { setTime(value) }} setTime={() => setTime((time) => time + 1000)} resetTime={() => setTime(0)} gameTimeLineData={gameTimelineData} gameRecapData={gameRecapData} />
            </TimeLineControls>

            {
                isMobile ?
                    <FiltersContainer />
                    : null
            }

            <TimeLineRightPart>
                {isMobile

                    ? <Tabs tabs={[
                        {
                            title: 'Trackers',
                            render: () => <TimeLineTrackers gameMode={gameRecapData.game_mode} time={time} participants={gameRecapData.participants} gameTimelineData={gameTimelineData} />
                        },
                        {
                            title: 'Events',
                            render: () => <TimeLineEventsList time={time} participants={gameRecapData.participants} gameTimelineData={gameTimelineData} />
                        }
                    ]} /> :
                    <>
                        <FiltersContainer />
                        <TimeLineTrackers gameMode={gameRecapData.game_mode} time={time} participants={gameRecapData.participants} gameTimelineData={gameTimelineData} />
                        <TimeLineEventsList time={time} participants={gameRecapData.participants} gameTimelineData={gameTimelineData} />
                    </>
                }


            </TimeLineRightPart>
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    align-items: center;
    flex-direction: column;
    /* padding: 0 10px; */
    grid-template-areas: 'leftPart' 
                         'controls' 
                        'filters'
                        'rightPart';
    ${mediaQueries('laptop')`
        flex-direction: row;
        flex-wrap: wrap;
        grid-template-areas: 'leftPart filters rightPart rightPart rightPart rightPart rightPart' 
                             'controls controls controls controls controls controls controls';
`}
`


const TimeLineLeftPart = styled.div`
    grid-area: leftPart;
    width: 100%;
    grid-column: 1;
    grid-row: 1;
    ${mediaQueries('laptop')`
        width: 50%;
    `}
`;

const TimeLineRightPart = styled.div`
    margin-top: 10px;
    grid-area: rightPart;
`;

const TimeLineControls = styled.div`
    grid-area: controls;
    width: 100%;

`;

const FiltersContainer = styled(Filters)`
    grid-area: filters;
`;


export default TimeLineTab;