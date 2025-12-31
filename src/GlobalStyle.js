import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background: #eee;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
    }
`;

export const Container = styled.main`
    max-width: 900px;
    margin: 0 auto; 
    padding: 20px;
`;