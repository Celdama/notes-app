import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {

  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;

  }

  .App {

  }

  button:focus {
    outline: none;
  }

  .split {
    display: flex;
  }
`;
