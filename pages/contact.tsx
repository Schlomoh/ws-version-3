import BasePage from "../components/basePage";
import {
  PaddingContainer,
  TextWrapper,
} from "../components/globalStyledComponents";
import image from "../assets/img/telephones.jpg";
import ContactForm from "../components/ContactForm";

const aboutTitleContent = {
  title: "Contact page.",
  subTitle: "Lets get in touch.",
  link: "/contact",
  image: image,
} as IPageTitleContent;

const AboutContent = () => {
  return (
    <PaddingContainer>
      <TextWrapper>
        <p>Send me a message and I will try to write back right away.</p>
      </TextWrapper>
      <ContactForm />
      <TextWrapper small center>
        <p>
          When successfully having sent a message you will receive a
          confirmation mail.
        </p>
      </TextWrapper>
    </PaddingContainer>
  );
};

const About = () => {
  return (
    <BasePage menuHeaderContent={aboutTitleContent} render={<AboutContent />} />
  );
};

export default About;
