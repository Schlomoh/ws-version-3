import "../index.css";
import type { AppProps } from "next/app";
import MenuRow from "../components/menuRow";
import { Provider } from "react-redux";
import store from "../stateManagement/store";
import { CookieBanner, CookieModal } from "@schlomoh/react-cookieconsent";

function MyApp({ Component, pageProps }: AppProps) {
  const baseGrey = "#1e1e1e";
  const buttonStyle = {
    borderRadius: 0,
    marginLeft: 0,
    backgroundColor: baseGrey,
  } as React.CSSProperties;

  return (
    <Provider store={store}>
      <MenuRow />
      <CookieBanner
        enableManagement
        cookieCategories={["Analysis", "Social media"]}
        containerStyle={{
          backgroundColor: baseGrey,
          borderTop: "solid 1px grey",
        }}
        headingColor="white"
        primaryButtonStyle={buttonStyle}
        secondaryButtonStyle={buttonStyle}
      />
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
