import {
  BasePage,
  GridContainer,
  GridElement,
  PaddingContainer,
  TextWrapper,
} from "../components";
import image from "../assets/img/flower-robot.jpg";

export const cookiePolicyTitleContent = {
  title: "Cookie Policy",
  subTitle: "Last Updated: 02-May-2022",
  image: image,
  link: "/cookiePolicy",
};

const CookiePolicyContent = () => (
  <PaddingContainer>
    <GridContainer>
      <GridElement>
        <TextWrapper>
          <h2>What are cookies?</h2>
          <p>
            This Cookie Policy explains what cookies are and how we use them,
            the types of cookies we use i.e, the information we collect using
            cookies and how that information is used, and how to manage the
            cookie settings. Cookies are small text files that are used to store
            small pieces of information. They are stored on your device when the
            website is loaded on your browser. These cookies help us make the
            website function properly, make it more secure, provide better user
            experience, and understand how the website performs and to analyze
            what works and where it needs improvement.
          </p>
          <h2>How do we use cookies?</h2>
          <p>
            As most of the online services, our website uses first-party and
            third-party cookies for several purposes. First-party cookies are
            mostly necessary for the website to function the right way, and they
            do not collect any of your personally identifiable data. The
            third-party cookies used on our website are mainly for understanding
            how the website performs, how you interact with our website, keeping
            our services secure, providing advertisements that are relevant to
            you, and all in all providing you with a better and improved user
            experience and help speed up your future interactions with our
            website.
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
