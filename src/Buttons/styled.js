import styled from "styled-components";

export const ButtonsPanel = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    margin: 0 0 0 20px;
    color: teal;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: 0.5s;

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        color: hsl(180, 100%, 40%);
    }

    &:active {
        color: hsl(180, 100%, 45%);
    }

    &:disabled {
        color: #ccc;
        cursor: not-allowed;
    }
`;