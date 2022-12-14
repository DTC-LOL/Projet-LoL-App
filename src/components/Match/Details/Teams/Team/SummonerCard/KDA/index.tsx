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
            <thead>
                <tr>
                    <th>K</th>
                    <th>D</th>
                    <th>A</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{kills}</td>
                    <td>{deaths}</td>
                    <td>{assists}</td>
                </tr>
            </tbody>

        </Container>);
};

const Container = styled.table`
    display: table;
    max-width: 100px;
    border: 1px solid #fff;
`;

const Separator = styled.div`
    margin:0 5px;
`;

export default KDA;