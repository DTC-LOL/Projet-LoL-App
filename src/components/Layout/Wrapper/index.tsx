import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '@services/media';

interface IProps {
    children: React.ReactNode;
}

const Wrapper: React.FC<IProps> = ({ children }) => {
    
    return (
        <Container>
            {children}
        </Container>
    );
};
const Container = styled.div`
    max-width: 370px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;

    ${mediaQueries("tablet")`
          max-width: 780px;
    `}
    ${mediaQueries("desktop")`
          max-width: 1440px;
    `}
`;
export default Wrapper;