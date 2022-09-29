import React from 'react';
import styled from 'styled-components';
import Map from '@components/Map';
import Filters from '@components/Filters';
const Match: React.FC = () => {
    return (
        <Container>
            <Map />
            <Filters />
        </Container>);
};
const Container = styled.div``;
export default Match;