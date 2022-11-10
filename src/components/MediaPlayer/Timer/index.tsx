import React from 'react';
import styled from 'styled-components';
interface IProps {
    time: number;
}

const Timer: React.FC<IProps> = (props) => {
    return (
        <Container>
            <span className="digits">
                {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
            </span>
            <span className="digits mili-sec">
                {("0" + ((props.time / 10) % 100)).slice(-2)}
            </span>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    height: 12%;
    justify-content: center;
    align-items: center;
  
.digits{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1rem;
    color:  #f5f5f5;
}
  
.mili-sec{
    color:  #e42a2a;
}
`

export default Timer;