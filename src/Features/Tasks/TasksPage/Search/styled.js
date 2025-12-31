import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd; 
    width: 100%;
    font-weight: 300;

    &::placeholder {
        color: #ccc;
    }
`;