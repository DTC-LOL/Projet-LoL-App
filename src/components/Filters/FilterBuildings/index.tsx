import useTranslation from '@hooks/useTranslation';
import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '@store/hooks';
import {setIsVisibleBuilding} from "@store/features/filters/filtersSlice";


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
        <Button onClick={() => handleFilterClick()} >
            <button><Icon src={"champion.svg"}/>Show Buildings</button>
        </Button>
    );
  
}

const Button = styled.div`
    width: 100%;
    button {
        position: relative;
        border-radius: 30px;
        border: none;
        background-color: #dd0054;
        width: 20%;
        height: 15%;
        padding: 10px;
        color: white;
    }
`;

const Icon = styled.img`
    width: 50px;
`

export default FilterBuildings;