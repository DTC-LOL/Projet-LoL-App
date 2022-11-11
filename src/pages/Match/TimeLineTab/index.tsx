import React from 'react';
import { mediaQueries } from 'services/media';
import styled from 'styled-components';

interface IProps {
    gameTimelineData: any,
    gameRecapData: any
}
import TimeLineMap from 'components/Timeline/TimelineMap';
import TimeLineEventsList from 'components/Timeline/List';
import MediaPlayer from 'components/Timeline/MediaPlayer';
import TimeLineTrackers from 'components/Timeline/Tracker';
import Tabs from '../../../components/Tabs/index';



const TimeLineTab: React.FC<IProps> = ({ gameTimelineData, gameRecapData }) => {
    const [time, setTime] = React.useState(0);

    return (
        <Container>

            <TimeLineLeftPart>
                <TimeLineMap gameTimelineData={gameTimelineData} gameMode={gameRecapData.game_mode} />
            </TimeLineLeftPart>
            <TimeLineControls>
                <MediaPlayer time={time} handleRangerChange={(value) => { console.log(value); setTime(value) }} setTime={() => setTime((time) => time + 1000)} resetTime={() => setTime(0)} gameTimeLineData={gameTimelineData} gameRecapData={gameRecapData} />
            </TimeLineControls>
            <TimeLineRightPart>
                <Tabs tabs={[
                    {
                        title: 'Trackers',
                        render: () => <TimeLineTrackers time={time} participants={gameRecapData.participants} gameTimelineData={gameTimelineData} />
                    },
                    {
                        title: 'Events',
                        render: () => <TimeLineEventsList time={time} participants={gameRecapData.participants} gameTimelineData={gameTimelineData} />
                    }
                ]} />

            </TimeLineRightPart>
        </Container>
    );
};
const Container = styled.div`
    display: flex;
    flex-direction: column;

    ${mediaQueries('laptop')`
        flex-direction: row;
        flex-wrap: wrap;
`}
`
const TimeLineLeftPart = styled.div`
    width: 100%;
    ${mediaQueries('laptop')`
        width: 50%;
    `}
`;

const TimeLineRightPart = styled.div`
    flex: 1;
`;

const TimeLineControls = styled.div`
    width: 100%;
    display: flex;
`;



export default TimeLineTab;