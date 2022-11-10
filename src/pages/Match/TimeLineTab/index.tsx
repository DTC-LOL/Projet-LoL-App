import React from 'react';
import { mediaQueries } from 'services/media';
import styled from 'styled-components';
interface IProps {
    gameTimelineData: any,
    gameRecapData: any
}
import TimeLineMap from 'components/Timeline/TimelineMap';
import TimeLineRanger from 'components/Timeline/TimeLineRanger';
import TimeLineEventsList from 'components/Timeline/List';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setMediaPlayerState } from 'store/features/timeline/timelineSlice';
import { FaPlay, FaSquareFull } from 'react-icons/fa';
import MediaPlayer from 'components/MediaPlayer';

// import "./StopWatch.css";
// import "./Timer.css";
// import "./ControlButtons.css";
import Tabs  from 'components/Tabs/';


  
const TimeLineTab: React.FC<IProps> = ({ gameTimelineData, gameRecapData }) => {
    const dispatch = useAppDispatch();

    const [time,setTime] = React.useState(0);

    return (<Container>

        <TimeLineLeftPart>
            <TimeLineMap gameTimelineData={gameTimelineData} gameMode={gameRecapData.game_mode} />

        </TimeLineLeftPart>
        <TimeLineRightPart>
          <Tabs
            tabs={[
              // {
              //   title: "Scalling",
              //   render: () => <p>BOOOH</p>
              // },
              {
                title: "Events",
                render: () => <TimeLineEventsList time={time} participants={gameRecapData.participants} gameTimelineData={gameTimelineData} />
              },
            ]}
          />
            

        </TimeLineRightPart>
        <TimeLineControls>
            <MediaPlayer time={time} setTime={(value:number) => setTime(value)} gameTimeLineData={gameTimelineData} gameRecapData={gameRecapData} />
            {/* <TimeLineActions>
                <TimeLineAction onClick={() => dispatch(setMediaPlayerState('play'))}><FaPlay /></TimeLineAction>
                <TimeLineAction onClick={() => dispatch(setMediaPlayerState('stopped'))}><FaSquareFull /></TimeLineAction>
            </TimeLineActions> */}
            {/* <TimeLineRanger gameTimelineLength={gameTimelineData.length} /> */}
            {/* <StopWatch/> */}

            {/* <TimeLineRangeInputContainer>
                <p>Minutes : {selectedTime}</p>
                <input onChange={handleRangeInputChange} type="range" value={selectedTime} min="1" max={gameTimelineData.info.frames.length - 1} name="" id="" />
            </TimeLineRangeInputContainer> */}
        </TimeLineControls>

    </Container>);
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