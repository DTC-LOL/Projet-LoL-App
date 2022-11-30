import { IGameTimeLine, IGameTimeLineFrameEvent, IParticipant } from 'types/match';
import React from 'react';
import styled from 'styled-components';
import useTranslation from 'hooks/useTranslation';
import { useAppDispatch } from 'store/hooks';
import { valueSelectorByType } from 'utils/Timeline/renderEventData';
import {mediaQueries} from "../../../services/media";

interface IProps {
  gameTimelineData: IGameTimeLine;
  participants: IParticipant[];
  time: number
}

const excludedEventType = ["SKILL_LEVEL_UP","WARD_PLACED","WARD_KIL", "LEVEL_UP", "ITEM_DESTROYED", "ITEM_SOLD"];
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

  const mergeArrays = (arrays: any[]) => {
    const tempArray: Array<any> = [];
    arrays.forEach((frame) => {
      tempArray.push(frame.events);
    });
    return tempArray.flat();
  }

  const events: any = React.useMemo(() => mergeArrays(gameTimelineData.info.frames), [gameTimelineData.info.frames]);

  const isInTimeRange = (eventTimestamp: number) => {
    const range = 30000;
    return eventTimestamp >= (time +1 ) - range && eventTimestamp <= time + 1;
  }

  return (
    <>  
      <Container ref={listRef} >
        {events.map((event: IGameTimeLineFrameEvent, key: string) => excludedEventType.includes(event.type) ?
          "" : excludedWardEventType.includes(event.type) ? "" : event.timestamp > 0 ?
            (isInTimeRange(event.timestamp) && (
              <TimeLineListItem  key={"Event_" + key} teamColor={event.participantId}>
              {/* {event.type} */}
              <TimeLineListItemTime>
                {unixTimestampToMinutes(event.timestamp)}
              </TimeLineListItemTime>
              {valueSelectorByType(event, participants) ? valueSelectorByType(event, participants) : <span style={{paddingRight: "1rem"}}>{event.type}</span>}

            </TimeLineListItem>
            )) : ""
        )}
      </Container>
    </>
  );
};

const TimeLineListItemTime = styled.div`

`;

const Container = styled.ul`
    height: 229px;
    overflow: hidden;
    overflow-y: scroll;
    padding-left: 0;
	${mediaQueries("desktop")`
      overflow-y: hidden;
	`} 
`;


const TimeLineListItem = styled.li<{ teamColor: any }>`
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 48px;  
    background: ${props => props.teamColor < 5 ? "linear-gradient(90deg, rgba(0,42,84,1) 0%, rgba(5,130,255,1) 100%)" : "linear-gradient(90deg, rgba(84,0,0,1) 0%, rgba(255,0,0,1) 100%)"};
    padding: 0 0 0 1rem;
`;



export default TimeLineEventsList;