import BasePage from "../components/basePage";

import { projects } from "./projects";

import { PaddingContainer } from "../components/globalStyledComponents";
import ProjectHomeListing from "../components/projectListing";

import background from "../assets/img/background.jpg";
import { remeshContent } from "./projects/remeshing";

const titleContent = {
  title: "Home Page",
  subTitle: "Welcome, Friend!",
  image: background,
  link: "/",
} as IProjectContent;

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
  return <BasePage menuHeaderContent={titleContent} render={<Content />} />;
};

export default Home;
