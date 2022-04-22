import BasePage from "../components/basePage";
import { PaddingContainer } from "../components/globalStyledComponents";

import image from "../assets/img/goat.jpg";

const AboutContent = () => {
  return (
    <PaddingContainer>
      <h2 style={{ marginBottom: "0" }}>Moin,</h2>
      <h3 style={{ marginTop: "0" }}> call me Mo!</h3>
      <p>
        I&apos;m a 21 year old programmer from Hamburg. I love web development
        enjoy cycling, drawing and of course... coffee.
      </p>
      <p>
        I like to think of myself as being open minded and always curious about
        learning new things - exploring new ideas and concepts helps me find
        solutions to modern problems. <br />
        Focused problem solving and a combination of eagerness and ingenuity are
        my key strengths, which I love putting to the test in challenging
        projects.
      </p>
      <p>
        So that I can now share my experiences with the world, I decided to
        collect and publish all my projects here, as well as tips and tricks I
        have learned over the time.
        <br />I am very grateful for any kind of feedback, ideas and suggestions
        for improvement and hope that this will be a way to grow better
        together.
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
