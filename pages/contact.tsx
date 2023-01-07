import { BasePage, GridContainer, GridElement, Surface, theme } from "../components";
import { ContactForm, PaddingContainer, TextWrapper } from "../components";

const AboutContent = () => {
  return (
    <PaddingContainer>
      <GridContainer>
        <GridElement>
          <Surface color="orange" variant="outlined" style={{ width: "100%" }}>
            <TextWrapper>
              <h2>Send me a message.</h2>
            </TextWrapper>
            <TextWrapper color = {theme.colors.accent.orange}>
              <h1>Contact</h1>
            </TextWrapper>
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
          </Surface>
        </GridElement>
      </GridContainer>
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
