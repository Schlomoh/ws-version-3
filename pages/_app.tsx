import "../index.css";
import type { AppProps } from "next/app";
import MenuRow from "../components/menuRow";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MenuRow />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
