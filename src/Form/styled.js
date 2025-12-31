import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    width: 100%;
`;

export const Button = styled.button`
    padding: 10px 20px;
    background: ${({ theme }) => theme.color.teal || "#008080"};
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.05);
    }

    &:active {
        filter: brightness(120%);
    }
`;