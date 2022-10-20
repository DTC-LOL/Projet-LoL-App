import React from 'react'; 
import styled from 'styled-components';

interface IProps {
    selectedFilter: string;
}

const FilterChampions: React.FC<IProps> = ({ selectedFilter }) => {
    return (
        <Container visible={selectedFilter === "champion" ? true : false}>
            
        </Container>
    );
};

const Container = styled.div<{visible : boolean}>`
    
`;

