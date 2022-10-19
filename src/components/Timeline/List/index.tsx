import { IGameTimeLine, IGameTimeLineFrameEvent, IParticipant } from '@typesDef/match';
import React from 'react';
import styled from 'styled-components';
import useTranslation from '@hooks/useTranslation';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setSelectedTime } from '@store/features/timeline/timelineSlice';
import { valueSelectorByType } from '../../../utils/Timeline/renderEventData';
import { mediaQueries } from '@services/media';

interface IProps {
  gameTimelineData: IGameTimeLine;
  participants: IParticipant[];
}

const excludedItems = ["SKILL_LEVEL_UP", "LEVEL_UP", "ITEM_DESTROYED", "ITEM_SOLD"];


const TimeLineList: React.FC<IProps> = ({ gameTimelineData, participants }) => {
  const { t } = useTranslation("timeline/events");
  // const [selectedTime, setSelectedTime] = React.useState<number>(0);
  const selectedTime = useAppSelector(state => state.timeline.selectedTime);
  const dispatch = useAppDispatch();

  const unixTimestampToMinutes = (unixTimestamp: number) => {
    const date = new Date(unixTimestamp);

    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();

    const formattedTime = minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
  }

  const handleRangeInputChange = (e: any) => {
    dispatch(setSelectedTime(e.target.value));
    // setSelectedTime(e.target.value);
  }



  return (
    <>
      <Container>
        {gameTimelineData.info.frames[selectedTime].events.map((event, key) => excludedItems.includes(event.type) ?
          "" : (
            <TimeLineListItem key={"Event_" + key} teamColor={event.participantId}>
              {/* {event.type} */}
              <TimeLineListItemTime>
                {unixTimestampToMinutes(event.timestamp)}
              </TimeLineListItemTime>
              {valueSelectorByType(event, participants) ? valueSelectorByType(event, participants) : event.type}
            </TimeLineListItem>
          )
        )}

      </Container>
      <TimeLineRangeInputContainer>
        <p>Minutes : {selectedTime}</p>
        <input onChange={handleRangeInputChange} type="range" value={selectedTime} min= "1" max={gameTimelineData.info.frames.length - 1} name="" id="" />
      </TimeLineRangeInputContainer>

    </>
  );
};

const TimeLineListItemTime = styled.div`

`;

const TimeLineRangeInputContainer = styled.div`
    width: 100%;  
    color: #fff;
    
    input[type=range] {

  -webkit-appearance: none;

    margin-top: 10px;
  width: 100%;
  ${mediaQueries('laptop')`
      min-width: 400px;

      max-width: 400px;
  `}
}

input[type=range]:focus {
  outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 20px;
  cursor: pointer;
  animate: 0.2s;

  background: #363636;
  border-radius: 0px;
}

input[type=range]::-webkit-slider-thumb {

  height: 30px;
  width: 30px;
  border-radius: 50px;
  background: #DD0054;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -4px;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: #363636;
}

input[type=range]::-moz-range-track {
  width: 100%;
  height: 20px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #000000;
  background: #363636;
  border-radius: 0px;
  border: 1px solid #000000;
}

input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000;
  border: 1px solid #000000;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  background: #DD0054;
  cursor: pointer;
}

input[type=range]::-ms-track {
  width: 100%;
  height: 20px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

input[type=range]::-ms-fill-lower {
  background: #363636;
  border: 1px solid #000000;
  border-radius: 0px;
  box-shadow: 1px 1px 1px #000000;
}

input[type=range]::-ms-fill-upper {
  background: #363636;
  border: 1px solid #000000;
  border-radius: 0px;
  box-shadow: 1px 1px 1px #000000;
}

input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 1px 1px 1px #000000;
  border: 1px solid #000000;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  background: #DD0054;
  cursor: pointer;
}

input[type=range]:focus::-ms-fill-lower {
  background: #363636;
}

input[type=range]:focus::-ms-fill-upper {
  background: #363636;
}

`;

const Container = styled.ul`
    min-height: 400px;
    max-height: 400px;
    max-width: 400px;
    overflow: hidden;
    overflow-y: scroll;
    padding-left: 0;
`;


const TimeLineListItem = styled.li<{ teamColor: any }>`
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 48px;  
    background-color: ${props => props.teamColor < 5 ? "#3998e6" : "#801414"};
`;



export default TimeLineList;