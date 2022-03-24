import BasePage from "../components/basePage";
import { PaddingContainer } from "../components/globalStyledComponents";

import image from "../assets/img/goat.jpg";

const AboutContent = () => {
  return (
    <PaddingContainer>
      <h2 style={{ marginBottom: "0" }}>Hi there, </h2>
      <h3 style={{ marginTop: "0" }}> nice to see you around!</h3>
      <p>
        I&apos;m Mo, a web Dev constantly trying out new stuff with the goal to
        improve on every project.
      </p>

      <p>
        Especially working with 3D web integration, tensorflow and the first
        steps into the world of web3, I focus on advancing my experience with a
        hands-on approach.
      </p>
    </PaddingContainer>
  );
};

const aboutTitleContent = {
  title: "About me.",
  subTitle: "Its all...",
  link: "/about",
  image: image,
} as IPageTitleContent;

const About = () => {
  return (
    <BasePage menuHeaderContent={aboutTitleContent} render={<AboutContent />} />
  );
};

export default About;
