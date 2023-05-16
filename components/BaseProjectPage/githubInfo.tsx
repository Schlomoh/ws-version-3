import { useRouter } from "next/router";
import { FiGithub } from "react-icons/fi";

import { projectData } from "../../pages/projects";
import { LinkSurface } from "../LinkSurface";

const useGetInfo = () => {
  const { asPath } = useRouter();
  const fractions = asPath.split("/");
  const projectName = fractions && fractions[fractions.length - 1];
  const project = projectName && projectData[projectName];

  return {
    githubSource: (project && project.githubSource) || "",
    pageTitle: (project && project.title) || "",
  };
};

const GithubInfo = () => {
  const { githubSource, pageTitle } = useGetInfo();

  return (
    <LinkSurface
      infoText="Find this project on Github:"
      linkText={pageTitle}
      href={githubSource}
      color="blue"
      icon={FiGithub}
    />
  );
};

export default GithubInfo;
