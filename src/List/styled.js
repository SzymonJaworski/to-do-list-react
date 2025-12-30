import styled, { css } from "styled-components";

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
    border-bottom: 1px solid rgb(231, 229, 229);

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const ActionButton = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    cursor: pointer;
    transition: 0.5s;

    ${({ toggleDone }) => toggleDone && css`
        background: #0a8127;
        &:hover { background: hsl(135, 86%, 32%); }
        &:active { background: hsl(135, 86%, 38%); }
    `}

    ${({ remove }) => remove && css`
        background: #e12424;
        &:hover { background: hwb(0 14% 18%); }
        &:active { background: hwb(0 14% 25%); }
    `}
`;