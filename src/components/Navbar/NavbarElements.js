import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0 0 0;
`;

export const NavLogo = styled(Link)`
    color: green;
    font-size: 2rem;
    text-decoration: none;
    cursor: pointer;
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
`;

export const NavLink = styled(Link)`
    color: white;
    font-size: 2rem;
    font-family: comic sans ms, garamond;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 2rem;
    cursor: pointer;
    &:hover {
        color: grey;
    }
`;