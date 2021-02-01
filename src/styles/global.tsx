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

      ::-webkit-scrollbar {
        width: 6px;
      }
    
      ::-webkit-scrollbar-track {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background: transparent;
      }
    
      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #adadad;
      }
    }
  }
`;

export default GlobalStyle;
