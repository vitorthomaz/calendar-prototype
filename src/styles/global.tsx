import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0px;
    margin: 0px;

    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: scroll;

    font-size: 16px;
  }
`;

export default GlobalStyle;
