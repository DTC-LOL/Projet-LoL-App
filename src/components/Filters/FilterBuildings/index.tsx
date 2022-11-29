import useTranslation from 'hooks/useTranslation';
import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from 'store/hooks';
import {setIsVisibleBuilding} from "store/features/filters/filtersSlice";
import {mediaQueries} from "../../../services/media";


interface IProps {
    filterState: boolean;
}

const FilterBuildings: React.FC<IProps> = ({ filterState }) => {
    const { t } = useTranslation("filters/common");
    const dispatch = useAppDispatch()


    const handleFilterClick = () => {
        dispatch(setIsVisibleBuilding(filterState));
        if (filterState === false) {
            filterState = true;
        }else{
            filterState = false;
        }
    }

    

    return (
        <Container onClick={() => handleFilterClick()} >
           <Icon src={"/turret.svg"}/>
           {t('showBuildings')}
        </Container>
        
    );
  
}

const Container = styled.button`
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 30px;
    border: none;
    background-color: #dd0054;
    padding: 10px;
	${mediaQueries("tablet")`
        padding: 15px 30px;
	`} 
    color: white;
`;

const Icon = styled.img`
    width: 20px;
    margin-right: 0.5rem;
`

export default FilterBuildings;