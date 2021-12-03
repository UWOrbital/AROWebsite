import React from 'react';
import {
    Nav,
    NavLogo,
    NavMenu,
    NavLink,
} from "./NavbarElements";
import logo from './orbital-logo.png';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to="/"><img src={logo} alt="orbital logo" height="100px"></img></NavLogo>
                <NavMenu>
                    <NavLink to="/" activeStyle>Home</NavLink>
                    <NavLink to="/about" activeStyle>About</NavLink>
                    <NavLink to="/orbital" activeStyle>Orbital</NavLink>
                    <NavLink to="/givemoney" activeStyle>Give Money</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;