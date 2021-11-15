import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: -apple-system, Helvetica, sans-serif;

    @media(max-width: 1080px){
      html{
        font-size: 87.5%;
      }
    }
  }

  body{
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary}
  }

  a{
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;

    &:hover{
      color: ${({ theme }) => theme.colors.text.link}
    }
  }
`;
