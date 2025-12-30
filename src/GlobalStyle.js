import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: "Montserrat", sans-serif;
        background: rgb(231, 229, 229);
        word-break: break-word;
        margin: 0;
    }
`;