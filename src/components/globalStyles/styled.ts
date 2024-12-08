import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background-color:#030304;
        width: 100%;
        height: 100%;
    }

    * {
        box-sizing:border-box;
        color:white;
        margin:0;
        padding:0;
        font-family: "Poppins", sans-serif;
    }
`;
