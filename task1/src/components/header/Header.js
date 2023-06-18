import React from "react";
import { HeaderContainer } from "./styled";
import logo from "./logo";

const Header = ({ getUserData }) => {
    return (
        <HeaderContainer>
            <img src={logo} alt="brand logo" />
            <button onClick={getUserData} >Get users</button>
        </HeaderContainer>
    );
}

export default Header;
