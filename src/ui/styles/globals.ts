import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: -apple-system, Helvetica, sans-serif;
  }

  body{
    background: ${({ theme }) => theme.colors.background};
  }
`;
