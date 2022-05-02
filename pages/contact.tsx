import BasePage from "../components/basePage";
import { PaddingContainer } from "../components/globalStyledComponents";

import image from "../assets/img/telephones.jpg";

const AboutContent = () => {
  return <PaddingContainer></PaddingContainer>;
};

const aboutTitleContent = {
  title: "Contact page.",
  subTitle: "Lets get in touch.",
  link: "/contact",
  image: image,
} as IPageTitleContent;

const About = () => {
  return (
    <BasePage menuHeaderContent={aboutTitleContent} render={<AboutContent />} />
  );
};

export default About;
