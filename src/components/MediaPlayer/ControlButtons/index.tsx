import React from 'react';
interface IProps { handleStart: React.MouseEventHandler<HTMLDivElement> | undefined; handleReset: React.MouseEventHandler<HTMLDivElement> | undefined; handlePauseResume: React.MouseEventHandler<HTMLDivElement> | undefined; isPaused: any; active: any; }
const ControlButtons: React.FC<IProps> = (props) => {
    const StartButton = (
        <div className="btn btn-one btn-start"
            onClick={props.handleStart}>
            Start
        </div>
    );
    const ActiveButtons = (
        <div className="btn-grp">
            <div className="btn btn-two"
                onClick={props.handleReset}>
                Reset
            </div>
            <div className="btn btn-one"
                onClick={props.handlePauseResume}>
                {props.isPaused ? "Resume" : "Pause"}
            </div>
        </div>
    );

    return (
        <div className="Control-Buttons">
            <div>{props.active ? ActiveButtons : StartButton}</div>
        </div>
    );
}

export default ControlButtons;
