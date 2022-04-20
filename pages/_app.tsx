import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { CookieBanner } from "@schlomoh/react-cookieconsent";

import store from "../stateManagement/store";
import MenuRow from "../components/menuRow";
import GlobalStyle from "../globalStyle";
import Link from "next/link";
import { TextWrapper } from "../components/globalStyledComponents";

function MyApp({ Component, pageProps }: AppProps) {
  const baseGrey = "#1e1e1e";
  const buttonStyle = {
    borderRadius: 0,
    marginLeft: 0,
    backgroundColor: baseGrey,
  } as React.CSSProperties;
  const InfoContent = () => {
    return (
      <TextWrapper>
        <h3>Who doesn&apos;t love a good cookie? 🍪</h3>
        <p>
          Cookies and other technologies such as content caching and request
          analysis are used on this site to further improve the user experience
          and the content and services offered.
          <br />
          Detailed information can be found in the{" "}
          <Link href="/cookie-policy">cookie policy</Link>.
        </p>
      </TextWrapper>
    );
  };

  const ManagementContent = () => (
    <TextWrapper>
      <h3>Manage your preferences.</h3>
      <p>
        Choose which cookies and services you agree with. The necessary cookies
        only save your choices, additionally absolutely anonymous data is sent
        to the operator to determine whether the site is working properly.
      </p>
      <p>
        Detailed information can be found in the{" "}
        <Link href="/cookie-policy">cookie policy</Link>.
      </p>
    </TextWrapper>
  );

  return (
    <Provider store={store}>
      <GlobalStyle />
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
        infoContent={<InfoContent />}
        managementContent={<ManagementContent />}
      />
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
