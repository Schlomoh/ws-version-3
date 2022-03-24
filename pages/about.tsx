import BasePage from "../components/basePage";
import { PaddingContainer } from "../components/globalStyledComponents";

import image from "../assets/img/goat.jpg";

const AboutContent = () => {
  return <PaddingContainer></PaddingContainer>;
};

const aboutTitleContent = {
  title: "About me.",
  subTitle: "Its all...",
  link: "/about",
  image: image,
} as IPageTitleContent;

const About = () => {
  return (
    <BasePage
      menuHeaderContent={aboutTitleContent}
      render={<AboutContent />}
    />
  );
};

export default About;
