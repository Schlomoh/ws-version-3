import { BasePage } from "../components";
import { ContactForm, PaddingContainer, TextWrapper } from "../components";

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
    <BasePage>
      <AboutContent />
    </BasePage>
  );
};

export default About;
