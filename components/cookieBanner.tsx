import { CookieBanner } from "@schlomoh/react-cookieconsent";
import { TextWrapper } from "./globalStyledComponents";
import Link from "next/link";

const PageCookieBanner = () => {
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
  );
};

export default PageCookieBanner;
