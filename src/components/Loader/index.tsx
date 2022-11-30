import React from "react";
import {Spinner} from "react-bootstrap";
import styled from "styled-components";

const Loader = () => {
    return (
        <Container>
            <SpinnerElement animation={"border"}>
                <span className="visually-hidden">Loading...</span>
            </SpinnerElement>
        </Container>
    )
}

const Container = styled.div`
    text-align: center
`

const SpinnerElement = styled(Spinner)`
    width: 5rem;
    height: 5rem;
    color: ${(props) => props.theme.colors.layout.secondary} !important;
`

export default Loader;