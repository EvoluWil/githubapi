import React, { useEffect, useState } from "react";
import GlobalStyles from "../ui/styles/globals";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import light from "../ui/theme/light";
import dark from "../ui/theme/dark";
import { Header } from "../ui/components/Header/Header";
import { Footer } from "ui/components/Footer/Footer";
import { AppContainer } from "ui/styles/page/_app";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    const title = localStorage.getItem("@gitapi:theme");
    if (title) setTheme(title === "light" ? light : dark);
  }, []);

  const handleChageTheme = () => {
    if (theme.title === "light") {
      setTheme(dark);
      localStorage.setItem("@gitapi:theme", "dark");
    } else {
      setTheme(light);
      localStorage.setItem("@gitapi:theme", "light");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        {/*  <Header toggleTheme={handleChageTheme} /> */}
        <Component {...pageProps} />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default MyApp;
