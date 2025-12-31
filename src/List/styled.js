import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: teal; 
    
    &:hover {
        filter: brightness(110%);
    }
`;

export const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-gap: 10px;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    ${({ $hidden }) => $hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    color: teal; 
    
    ${({ $done }) => $done && css`
        text-decoration: line-through;
        color: #777;
    `}
`;

export const ActionButton = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ $toggleDone }) => $toggleDone && css`
        background: #228b22; 
    `}

    ${({ $remove }) => $remove && css`
        background: #db2222; 
    `}
`;
