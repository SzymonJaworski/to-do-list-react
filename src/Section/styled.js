import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: white;
    margin: 10px 0;
    box-shadow: 0 0 5px rgb(231, 229, 229);
`;

export const SectionHeaderContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    align-items: center;
    border-bottom: 1px solid rgb(231, 229, 229);
    justify-content: space-between;
    padding: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 21px;
`;

export const SectionBody = styled.div`
    padding: 20px;
`;