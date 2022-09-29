import React from 'react';
import styled from 'styled-components';

interface IProps {
    kills: number,
    deaths: number,
    assists: number
}

const KDA: React.FC<IProps> = ({ kills, deaths, assists }) => {
    return (
        <Container>
            <p>{kills}</p>
            <Separator> / </Separator>
            <p>{deaths}</p>
            <Separator> / </Separator>
            <p>{assists}</p>
        </Container>);
};

const Container = styled.div`
    display: flex;
`;
const Separator = styled.div`
    margin:0 5px;
`;

export default KDA;