import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html, body, div, header, main, p, figure, ul, a, h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration: none;
    }
`;