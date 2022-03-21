import BasePage from "../components/basePage";
import ProjectItem from "../components/projectItem";

import background from "../assets/img/background.jpg";

import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";

import { PaddingContainer } from "../components/globalStyledComponents";

const Content = () => (
  <>
    <PaddingContainer>
      <h2 style={{marginBottom: '0'}}>Browse my projects.</h2>
    </PaddingContainer>
    <ProjectItem priority uploaded="4w ago" imgSrc={img3} name="remeshing." />
    <ProjectItem uploaded="1d ago" imgSrc={img2} name="usdz conversion." />
    <ProjectItem uploaded="4y ago" imgSrc={img4} name="brighter. clothing." />
    <ProjectItem uploaded="4y ago" imgSrc={img1} name="OCR analyzer." />
    <PaddingContainer>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus rerum,
        sequi porro incidunt provident nesciunt voluptatem sunt corporis
        repellat reiciendis odit, deserunt excepturi suscipit laboriosam ab
        inventore, quidem autem blanditiis?
      </p>
      <h4>And maybe get in contact</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus rerum,
        sequi porro incidunt provident nesciunt voluptatem sunt corporis
        repellat reiciendis odit, deserunt excepturi suscipit laboriosam ab
        inventore, quidem autem blanditiis?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus rerum,
        sequi porro incidunt provident nesciunt voluptatem sunt corporis
        repellat reiciendis odit, deserunt excepturi suscipit laboriosam ab
        inventore, quidem autem blanditiis?
      </p>
    </PaddingContainer>
  </>
);

export const Home = () => {
  return (
    <BasePage
      image={background}
      title="Home page."
      subtitle="You're on the"
      Content={Content}
    />
  );
};

export default Home;
