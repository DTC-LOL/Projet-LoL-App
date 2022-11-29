import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
	const location = useLocation();

    return (
        <Container>
            <Link to="/"><Logo src="/logo.png" alt="" /></Link>
            <Nav>
                <NavItem to="/">Accueil</NavItem>
                <NavItem to="/search">
					{location.pathname.split('/')[1] === "match" ? 'Retour' : 'Chercher un invocateur'}
				</NavItem>
            </Nav>
        </Container>
    );
};

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.layout.primary};
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 3px solid ${(props) => props.theme.colors.layout.secondary};
`;

const Logo = styled.img`
    width: 30px;
    filter: invert(1);
`

const Nav = styled.nav`
    margin-left: 30px;
    display: flex;
    gap: 15px;
`;

const NavItem = styled(Link)`
    color: #fff;
    text-decoration: none;
    transition : all 0.2s;
    position: relative;
    overflow: hidden;

    &:hover{
        color: ${(props) => props.theme.colors.layout.secondary};
    }
`;

export default Header;