import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0px;
    margin: 0px;

    background: ${props => props.theme.colors.pageBackground};
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: scroll;

    font-size: 16px;

    * {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
  }
`;

export default GlobalStyle;
