import "../index.css";
import type { AppProps } from "next/app";
import MenuRow from "../components/menuRow";
import { Provider } from "react-redux";
import store from "../stateManagement/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MenuRow />
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
