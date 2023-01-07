import Link from "next/link";
import { CookieBanner } from "@schlomoh/react-cookieconsent";
import { GridContainer, GridElement, TextWrapper, theme } from "../";

const PageCookieBanner = () => {
  const baseGrey = theme.colors.surface.elevation[0];
  const buttonStyle = {
    borderRadius: 0,
    marginLeft: 0,
    backgroundColor: baseGrey,
  } as React.CSSProperties;

  const InfoContent = () => {
    return (
      <TextWrapper>
        <GridContainer>
          <GridElement>
            <div>
            <h3>Who doesn&apos;t love a good cookie? 🍪</h3>
            <p>
              Cookies and other technologies such as content caching and request
              analysis are used on this site to further improve the user
              experience and the content and services offered.
              <br />
              Detailed information can be found in the{" "}
              <Link href="/privacyPolicy">Privacy Policy</Link>.
            </p>
            </div>
          </GridElement>
        </GridContainer>
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
        <Link href="/privacyPolicy">Privacy Policy</Link>.
      </p>
    </TextWrapper>
  );

  return (
    <CookieBanner
      enableManagement
      cookieCategories={["Analysis", "Social media"]}
      containerStyle={{
        backgroundColor: baseGrey,
        boxShadow: "box-shadow: 0 2px 2rem -10px rgba(0, 0, 0, 0.2);",
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
