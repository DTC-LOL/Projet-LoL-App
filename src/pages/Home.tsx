import React from 'react';
import styled from 'styled-components';

import Wrapper from 'components/Layout/Wrapper';

const Home: React.FC = () => {
  
    return (
        <Container>
            <Image src={'https://www.leagueoflegends.com/static/logo-1200-589b3ef693ce8a750fa4b4704f1e61f2.png'}/>
        </Container>
    );
};

const Container = styled(Wrapper)`
    display: flex;
`;

const Image = styled.img`
    display: block;
    margin: 5rem auto;
`

export default Home;