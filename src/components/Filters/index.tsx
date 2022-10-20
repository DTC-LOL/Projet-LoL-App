import useTranslation from '@hooks/useTranslation';
import React from 'react';
import styled from 'styled-components';
import FilterCheckbox from './FilterCheckbox';
import FilterBuildings from './FilterBuildings';
// interface IProps { };
// const defaultProps: IProps = {};

const Filters: React.FC = (props) => {
    const { t } = useTranslation("filters/common");

    return (
        <Container>
            <FilterCheckbox filterType={"Bkills"} />
            <FilterCheckbox filterType={"Rkills"} />
            <FilterCheckbox filterType={"champions"} />

            {/* 
           TODO: Ajouter des filtres qui permet de d'afficher 
           les Champions présent dans la game et donc
           de pouvoir suivre leurs déplacements au cas par cas
           ex : 
                - Je veux comparer les déplacements des deux Jungle 
                sur la carte
                
                - Je veux voir les erreurs de placement de mon equipe 

        */}
            <FilterBuildings filterState={false} />
        </Container>

    );
};

const Container = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: start;

    gap: 1rem;
    width: 100%;
`;
export default Filters;