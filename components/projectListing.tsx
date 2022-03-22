import { useEffect } from "react";
import ProjectItem from "./projectItem";

const createProjectHomeListing = (content: TProjectContentArr) => {
  return content.map((project: IProjectContent, i: number) => {
    return (
      <ProjectItem
        link={project.link}
        key={i}
        name={project.title}
        imgSrc={project.image}
        uploaded="1w"
        priority={i === 0}
      />
    );
  });
};

const ProjectHomeListing = (props: { content: TProjectContentArr }) => {
  return <>{createProjectHomeListing(props.content)}</>;
};

export default ProjectHomeListing;
