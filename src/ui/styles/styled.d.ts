import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: {
        light: string;
        main: string;
      };
      secondary: {
        main: string;
      };
      background: string;
      navBar: string;
      navBarInput: string;
      border: string;
      text: {
        primary: string;
        secondary: string;
        link: string;
      };
      error: {
        main: string;
      };
      success: {
        main: string;
      };
    };
  }
}
