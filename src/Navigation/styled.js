import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavigation = styled.nav`
    background: ${({ theme }) => theme.color.teal || "#008080"};
    display: flex;
    justify-content: center;
    padding: 15px;
    margin-bottom: 40px;
`;

export const List = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    margin: 0 20px;
`;

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-size: 18px;

    &.active {
        font-weight: 700;
    }

    &:hover {
        border-bottom: 1px solid;
    }
`;