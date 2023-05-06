import {
  BasePage,
  GridContainer,
  GridElement,
  PaddingContainer,
  TextWrapper,
} from "../components";

const CookiePolicyContent = () => (
  <PaddingContainer>
    <GridContainer>
      <GridElement>
        <TextWrapper>
          <h2>🍪 What are cookies?</h2>
          <p>
            Our Cookie Policy offers insights into the nature of cookies and how
            we employ them. Cookies are small text files utilized to store bits
            of information. They're saved on your device when a website is
            accessed via your browser. These cookies enable our site to function
            correctly, bolster security, enhance user experience, and assess the
            site's performance. Additionally, we use them to pinpoint areas for
            improvement.
          </p>
          <h2>🔍 How do we use cookies?</h2>
          <p>
            Like most online services, our website employs first-party and
            third-party cookies for various purposes. First-party cookies are
            essential for the site to function correctly and don't gather any
            personally identifiable data. Third-party cookies on our website
            serve to understand the site's performance, evaluate user
            interaction, maintain security, deliver relevant ads, and improve
            user experience. They also facilitate faster interactions during
            future visits.
          </p>
          <h2>🔐 Your Privacy Matters</h2>
          <p>
            It's important to note that we embed Twitter tweets on our site,
            which may use cookies to deliver personalized content, track your
            interactions, and analyze usage. By using our website, you
            acknowledge and consent to the use of these third-party cookies.
          </p>
        </TextWrapper>
      </GridElement>
    </GridContainer>
  </PaddingContainer>
);

const CookiePolicy = () => {
  return (
    <BasePage>
      <CookiePolicyContent />
    </BasePage>
  );
};

export default CookiePolicy;
