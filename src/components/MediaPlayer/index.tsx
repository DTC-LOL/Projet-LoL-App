import React from 'react';
import { mediaQueries } from 'services/media';
import { setMediaPlayerState } from 'store/features/timeline/timelineSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import styled from 'styled-components';
import ControlButtons from './ControlButtons';
import Timer from './Timer';

interface IProps {
    gameTimeLineData: any,
    gameRecapData: any,
    setTime: (value: number) => void,
    time: number
}

const MediaPlayer: React.FC<IProps> = ({setTime, time,gameTimeLineData,gameRecapData}) => {
    const [isActive, setIsActive] = React.useState(false);
    const [isPaused, setIsPaused] = React.useState(true);
    const dispatch = useAppDispatch();
    const mediaPlayerState = useAppSelector(state => state.timeline.mediaPlayerState);
    
    React.useEffect(() => {
        let interval: any;

        if (mediaPlayerState === "play") {
            interval = setInterval(() => {
                console.log('+1s')
                setTime(time + 1000);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [mediaPlayerState, time]);

    const handleStart = () => {
        dispatch(setMediaPlayerState('play'));
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        dispatch(setMediaPlayerState(mediaPlayerState === 'paused' ? 'play' : 'paused'));
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    const handleRangeInputChange = (e: any) => {
        console.log(e.target.value)
        setTime(e.target.value);
        // setSelectedTime(e.target.value);
    }
  
    return (
        <Container>
            <Timer time={time} />
            <TimeLineRangeInputContainer>
                <input onChange={handleRangeInputChange} type="range" value={time} step="1" min="0" max={gameRecapData.game_duration * 1000} name="" id="" />
            </TimeLineRangeInputContainer>
            <ControlButtons
                active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset}
            />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    background-color: #0d0c1b;
    display: flex;

    align-items: center;
    justify-content: space-between;
`;

const TimeLineActions = styled.div`
    display: flex;
`;

const TimeLineAction = styled.div`
    min-height: 20px;
    min-width: 20px;
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
export default MediaPlayer;