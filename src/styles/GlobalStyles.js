import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f8f9fa;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Arial', sans-serif;
  }

  p {
    font-size: var(--ft-200);
    color: #333;
  }

  a {
    text-decoration: none;
    color: var(--ft-600);
    &:hover {
      color: var(--ft-500);
    }
  }
`;

export default GlobalStyle;
