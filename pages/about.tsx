import BasePage from "../components/basePage";
import background from "../assets/img/background.jpg";

const About = () => {
  return (
    <BasePage
      image={background}
      title="about"
      subtitle="You're on the"
      Content={() => <div></div>}
    />
  );
};

export default About;
