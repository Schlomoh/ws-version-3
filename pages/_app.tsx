import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import store from "../stateManagement/store";
import MenuRow from "../components/menuRow";
import GlobalStyle from "../globalStyle";
import PageCookieBanner from "../components/cookieBanner";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Moritz Becker | Web development</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <GlobalStyle />
        <MenuRow />
        <PageCookieBanner />
        <Component {...pageProps} />;
      </Provider>
    </>
  );
}

export default MyApp;
