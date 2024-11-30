import {createGlobalStyle} from "styled-components";
import {colors} from "./styleConstants";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        outline: none;
    }

    html {
        font-size: 20px;
    }

    body {
        margin: auto;
        max-width: 1110px;
        height: 100vh;
        background:${colors.secondary};
    }

    a {
        color: inherit;
        text-decoration: inherit;
        cursor: pointer;
    }
   
    ul {
        list-style: none;
        margin: 0;
        flex-wrap: wrap;

    }

    li {
     
        padding: 0 0 14px 0;

    }

    button {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        font-size: inherit;
        font-weight: inherit;
    }

    img {
        vertical-align: top;
    }

    h1 {

        margin: 0;
    }

    h2 {
        margin: 0;
   
    }

    h3 {
        font-size: 1.75rem;
    }

    h4 {
        font-size: 1.75rem;
    }

    h5 {
        font-size: 1.75rem;
    }

    h6 {
              margin: 0;
        padding: 0;
    }
`;
