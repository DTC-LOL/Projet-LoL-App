import useTranslation from '@hooks/useTranslation';
import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '@store/hooks';
import {setActiveFilter} from "@store/features/filters/filtersSlice";

interface IProps {
    filterType: string;
}

const FilterCheckbox: React.FC<IProps> = ({ filterType }) => {
    const { t } = useTranslation("filters/common");
    const dispatch = useAppDispatch()

    const IconSelector = () => {

        switch (filterType) {
            case "deaths":
                return "deaths.svg";
            case "firstBloods":
                return "firstBloods.svg";
            case "kills":
                return "kills.svg";
            case "wards":
                return "wards.svg";
            case "champions":
                return "champion.svg";
            default:
                return undefined;
        }
    }

    const handleFilterClick = () => {
        dispatch(setActiveFilter(filterType));
    }

    return (
        <Container onClick={() => handleFilterClick()}>
            <CheckBox name="filter" />
            <Icon src={IconSelector()}/>
            <Label>{t(filterType)}</Label>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    border-radius: 8px;
    background-color: #555;
    width: 142px;
    height: 142px;
    transition: border-width 0.6s linear;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const Label = styled.div`
    color: #fff;
    
`;

const Icon = styled.img`
    width: 50px;
`

const CheckBox = styled.input.attrs({ type: "radio" })`
    appearance: unset;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;

    &:checked {
        border: 4px solid #dd0054;
    }
`;

export default FilterCheckbox;