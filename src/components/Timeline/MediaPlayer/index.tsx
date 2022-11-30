import React from 'react';
import { mediaQueries } from 'services/media';
import styled from 'styled-components';
import ControlButtons from './ControlButtons';
import Timer from './Timer';
import { IGameRecap } from 'types/match';
import { IGameTimeLine } from 'types/match';

interface IProps {
  gameTimeLineData: IGameTimeLine,
  gameRecapData: IGameRecap,
  setTime: () => void,
  resetTime: () => void,
  handleRangerChange: (value: number) => void,
  time: number
}

const MediaPlayer: React.FC<IProps> = ({ handleRangerChange, setTime, time,resetTime, gameRecapData }) => {
  const [isActive, setIsActive] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState<boolean>(true);
  const [speed, setSpeed] = React.useState(1);
  let interval: any;

  React.useEffect(() => {
    if (time - 1 > gameRecapData.game_duration * 1000) {
      setIsPaused(true);
    } else {
     
      if (isActive && !isPaused) {
        interval = setInterval(() => {
          setTime();
        }, 1000 / speed);
      } else {
        clearInterval(interval);
      }

      return () => {
        clearInterval(interval);
      };
    }
  }, [isActive, isPaused, time]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(true);
    resetTime();
  };

  const handleRangeInputChange = (e: any) => {
    setIsPaused(true);
    handleRangerChange(parseInt(e.target.value));
  }

  const handleSpeedChange = (e: any) => {
    setSpeed(e.target.value);
  }
  
  return (
    <Container>
      <Timer time={time} />
      <TimeLineRangeInputContainer>
        <input onChange={handleRangeInputChange} type="range" value={time} min="0" max={gameRecapData.game_duration * 1000} name="" id="" />
      </TimeLineRangeInputContainer>
      {/* <Timer time={gameRecapData.game_duration * 1000} /> */}
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
        handleSpeedChange={handleSpeedChange}
      />
    </Container>
  );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    background-color: ${({ theme }) => theme.colors.layout.primary};
    padding: 10px 0;
`;

const TimeLineRangeInputContainer = styled.div`
    width: 100%;  
    color: #fff;
    
    input[type=range] {

  -webkit-appearance: none;
  width: 100%;
  ${mediaQueries('laptop')`
      min-width: 400px;

    
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

  background: ${({ theme }) => theme.colors.layout.body};
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
  background: ${({ theme }) => theme.colors.layout.body};

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