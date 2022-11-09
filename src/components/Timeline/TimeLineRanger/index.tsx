import React from 'react';
import styled from 'styled-components';
import { RangerOptions, useRanger } from "react-ranger";
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setSelectedTime } from 'store/features/timeline/timelineSlice';

interface IProps {
    gameTimelineLength: number;
}

const TimeLineRanger: React.FC<IProps> = ({gameTimelineLength}) => {
    const selectedTime: RangerOptions["values"] = useAppSelector(state => state.timeline.selectedTime);
    console.log(selectedTime);
    const dispatch = useAppDispatch();

    const setSTime = (value: number[]) => {
        dispatch(setSelectedTime(value));
    }
    
    const { getTrackProps, handles } = useRanger({
        min: 0, // minimum value
        max: gameTimelineLength, // maximum value
        stepSize: 1,
        values: selectedTime, // initial values
        onChange: setSTime,   
    });

    return (
        <Container
            {...getTrackProps({
                style: {
                    height: "4px",
                    background: "#ddd",
                    boxShadow: "inset 0 1px 2px rgba(0,0,0,.6)",
                    borderRadius: "2px"
                }
            })}>
            {handles.map(({ getHandleProps }, key: number) => (
                <button 
                    {...getHandleProps({
                        style: {
                            width: "14px",
                            height: "14px",
                            outline: "none",
                            borderRadius: "100%",
                            background: "linear-gradient(to bottom, #eee 45%, #ddd 55%)",
                            border: "solid 1px #888"
                        }
                    })}
                    key={"SLIDE_BUTTON"+key}
                />
            ))}
        </Container>
    );
};
const Container = styled.div`
    width: 98%;
    margin: 20px auto 0 auto;
`;
export default TimeLineRanger;