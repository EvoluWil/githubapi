import React, { useEffect, useState } from "react";
import GlobalStyles from "../ui/styles/globals";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
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
import { FooterHome } from "../ui/components/FooterHome/FooterHome";
import { RepositoryProvider } from "hooks/Repository";
import { Validator } from "ui/components/Validator/Validator";
import { EventProvider } from "hooks/Event";

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
          <Validator>
            <RepositoryProvider>
              <EventProvider>
                <ToastContainer autoClose={3000} />
                <GlobalStyles />
                <AppContainer>
                  {asPath === "/" ? (
                    <>
                      <Component {...pageProps} />
                      <FooterHome />
                    </>
                  ) : (
                    <>
                      <Header toggleTheme={handleChageTheme} />
                      <Component {...pageProps} />
                      <Footer />
                    </>
                  )}
                </AppContainer>
              </EventProvider>
            </RepositoryProvider>
          </Validator>
        </AuthProvider>
      </NextAuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
