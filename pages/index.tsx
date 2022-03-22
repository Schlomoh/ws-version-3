import BasePage from "../components/basePage";

import background from "../assets/img/background.jpg";

import { projects } from "./projects";

import { PaddingContainer } from "../components/globalStyledComponents";
import ProjectHomeListing from "../components/projectListing";

const Content = () => (
  <>
    <PaddingContainer>
      <h2 style={{ marginBottom: "0" }}>Browse my projects.</h2>
    </PaddingContainer>
    <ProjectHomeListing content={projects} />
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
  return <BasePage render={<Content />} />;
};

export default Home;
