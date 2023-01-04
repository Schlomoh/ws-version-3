import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { theme, TitleBar, CookieBanner } from "../components";
import store from "../stateManagement/store";
import GlobalStyle from "../globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Moritz Becker | Web development</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle theme={theme} />
          <TitleBar />
          <CookieBanner />
          <Component {...pageProps} />;
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
