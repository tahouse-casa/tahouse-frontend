import { createGlobalStyle } from "styled-components";
export const GlobalStyle= createGlobalStyle`
html {
                box-sizing: border-box;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        
        *, *::before, *::after {
                box-sizing: inherit;
                background: #f4f4f4;
        }
        
        ul, li, h1, h2, h3, p, button {
                margin: 0;
        }

        ul {
                list-style: none;
        }

        button {
                background: transparent;
                border: 0;
                outline: 0;
        }

        body {
                background: #f4f4f4;
                overscroll-behavior: none;
                max-width: 100vw;
                overflow-x: hidden;
        }
        #app {
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
                overflow-x: hidden;
                min-height: 100vh;
                padding-bottom: 10px;
        }
`