import React, { useEffect, useState } from "react";
import GlobalStyles from "../ui/styles/globals";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider as NextAuthProvider } from "next-auth/client";
import light from "../ui/theme/light";
import dark from "../ui/theme/dark";
import { Header } from "../ui/components/Header/Header";
import { useRouter } from "next/router";
import { AuthProvider } from "../hooks/Auth";
import { AppContainer } from "../ui/styles/page/_app.style";
import { Footer } from "../ui/components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(light);
  const { asPath } = useRouter();

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
      <NextAuthProvider session={pageProps.session}>
        <AuthProvider>
          <GlobalStyles />
          <AppContainer>
            {asPath === "/" ? (
              <>
                <Component {...pageProps} />
                <Footer />
              </>
            ) : (
              <>
                <Header toggleTheme={handleChageTheme} />
                <Component {...pageProps} />
              </>
            )}
          </AppContainer>
        </AuthProvider>
      </NextAuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
