import React from 'react';
import { FaPlay, FaPause, FaFastBackward } from 'react-icons/fa';
import styled from 'styled-components';

interface IProps {
    handleStart: React.MouseEventHandler<HTMLDivElement> | undefined;
    handleReset: React.MouseEventHandler<HTMLDivElement> | undefined;
    handlePauseResume: React.MouseEventHandler<HTMLDivElement> | undefined;
    handleSpeedChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
    isPaused: any;
    active: any;
}

const ControlButtons: React.FC<IProps> = (props) => {

    return (
        <Container>
            <ButtonGroup>
                <Select onChange={props.handleSpeedChange}  defaultValue="1">
                    <option value="0.25">0.25x</option>
                    <option value="0.5">0.5x</option>
                    <option value="1">1x</option>
                    <option value="1.5">1.5x</option>
                    <option value="2">2x</option>
                    <option value="5">5x</option>
                    <option value="10">10x</option>
                    <option value="100">100x</option>
                    <option value="1000">1000x</option>


                </Select>
                {props.active ?

                    <>
                        <Button
                            onClick={props.handleReset}>
                            <FaFastBackward />
                        </Button>
                        <Button
                            onClick={props.handlePauseResume}>
                            {props.isPaused ? <FaPlay /> : <FaPause />}
                        </Button>
                    </>
                    :
                    <Button
                        onClick={props.handleStart}>
                        <FaPlay />
                    </Button>
                }
            </ButtonGroup>

        </Container>
    );
}

const Container = styled.div`

`;

const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
    margin: 0 10px;
`;

const Button = styled.div`
    
`;

const Select = styled.select`
    color: #fff;
    background-color: transparent;
    border: none;
    option {
        background-color: #363636;
        border: none;
    }
`;


export default ControlButtons;
