import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    &.active {
        font-weight: bold;
    }
`;

const List = styled.ul`
    background: ${({ theme }) => theme.color.teal};
    margin: 0;
    padding: 10px;
    display: flex;
    justify-content: center;
    list-style: none;
`;

const Item = styled.li`
    margin: 20px;
`;

export const Navigation = () => (
    <nav>
        <List>
            <Item>
                <StyledNavLink to="/zadania">Zadania</StyledNavLink>
            </Item>
            <Item>
                <StyledNavLink to="/autor">O autorze</StyledNavLink>
            </Item>
        </List>
    </nav>
);