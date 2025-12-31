import styled from "styled-components";

export const ButtonsPanel = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background: transparent;
    color: teal;
    border: none;
    margin: 0 0 0 20px;
    transition: filter 0.3s;
    cursor: pointer;

    &:hover {
        filter: brightness(120%);
    }

    &:disabled {
        color: #ccc;
        cursor: not-allowed;
    }

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }
`;