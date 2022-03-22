import BasePage from "../components/basePage";
import background from "../assets/img/background.jpg";
import { ocrFormattingContent } from "./projects/ocrReformatting";

const About = () => {
  return (
    <BasePage menuHeaderContent={ocrFormattingContent} render={<div></div>} />
  );
};

export default About;
