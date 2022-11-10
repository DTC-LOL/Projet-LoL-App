import { IGameTimeLine, IGameTimeLineFrameEvent, IParticipant } from 'types/match';
import React from 'react';
import styled from 'styled-components';
import useTranslation from 'hooks/useTranslation';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { valueSelectorByType } from 'utils/Timeline/renderEventData';
import { mediaQueries } from 'services/media';

interface IProps {
  gameTimelineData: IGameTimeLine;
  participants: IParticipant[];
  time: number
}

const excludedEventType = ["SKILL_LEVEL_UP", "LEVEL_UP", "ITEM_DESTROYED", "ITEM_SOLD"];
const excludedWardEventType = ["UNDEFINED"];


const TimeLineEventsList: React.FC<IProps> = ({time, gameTimelineData, participants }) => {
  const { t } = useTranslation("timeline/events");
  // const [selectedTime, setSelectedTime] = React.useState<number>(0);
  const dispatch = useAppDispatch();
  const listRef = React.useRef<any>();
  const unixTimestampToMinutes = (unixTimestamp: number) => {
    const date = new Date(unixTimestamp);

    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();

    const formattedTime = minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
  }
  React.useEffect(() => {
    listRef.current?.scrollTo(0,listRef.current.scrollHeight - listRef.current.clientHeight);
  })
    // javaScript function that merge a collection of array into one array
  const mergeArrays = (arrays: any[]) => {
    const tempArray: Array<any> = [];
    gameTimelineData.info.frames.forEach((frame) => {
      tempArray.push(frame.events);
    })
    return tempArray.flat();
  }
  const events:any = mergeArrays(gameTimelineData.info.frames);
  return (
    <>  
      <Container ref={listRef}>
        {events.map((event: IGameTimeLineFrameEvent, key: string) => excludedEventType.includes(event.type) ?
          "" : excludedWardEventType.includes(event.type) ? "" : (time) >= event.timestamp && (
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


    </>
  );
};

const TimeLineListItemTime = styled.div`

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



export default TimeLineEventsList;