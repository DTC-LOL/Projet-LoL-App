import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from 'services/media';

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

    top: 0;
    left: 0;
    height:100%;
    width: 100%;
    max-width: 370px;


    ${mediaQueries("tablet")`
          max-width: 780px;
    `}
  
    ${mediaQueries("laptop")`
        max-width: 1024px;
    `}
    ${mediaQueries("desktop")`
          max-width: 1440px;
    `}
`;
export default Wrapper;