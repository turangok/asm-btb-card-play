import React from 'react';
import { Link } from 'react-router-dom'

import {
    StyledNavBar,
    Title,
} from './NavBar.styles';

export const NavBar = () => {
    return <StyledNavBar data-testid="navBarId">
        <Title>
            <Link to='/'>Home</Link>
            <Link to='/scoreboard'>Scoreboard</Link>
        </Title>

    </StyledNavBar>;
};
