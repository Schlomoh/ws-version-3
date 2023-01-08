import { extend } from "@react-three/fiber";
import { StaticImageData } from "next/image";
import { projectData } from "../../pages/projects";
import ProjectItem from "./projectItem";

interface Project {
  link: string;
  title: string;
  subTitle: string;
  image: string | StaticImageData;
}

interface Props {
  projectData: typeof projectData;
}

function ProjectListing(props: Props) {
  const { projectData } = props;
  const list = Object.keys(projectData).map((projectName: string, i: number) => {
    project = projectData[projectName]

    return (
      <ProjectItem
        link={project.link}
        key={i}
        title={project.title}
        subTitle={project.subTitle}
        imgSrc={project.image}
        uploaded="1w"
        priority={i === 0}
        style={{
          marginBottom: i + 1 === Object.keys(projectData).length ? 0 : "1rem",
        }}
      />
    );
  });
  return <>{list}</>;
}

export default ProjectListing;
