import BaseProjectPage from "../../components/baseProjectPage";
import NoProject from "../../components/noProject";
import { PaddingContainer } from "../../components/globalStyledComponents";

import image from "../../assets/img/triangle-surface.jpg";

export const remeshContent = {
  title: "Remeshing.",
  subTitle: "Remeshing and UV projection using Pymeshlab.",
  image: image,
  link: "/projects/remeshing",
  githubSource: "https://github.com/Schlomoh/Remesh_testing",
} as IPageTitleContent;

const content = remeshContent;

const Remeshing = () => {
  return (
    <BaseProjectPage menuHeaderContent={content}>
      <PaddingContainer>
        <NoProject />
      </PaddingContainer>
    </BaseProjectPage>
  );
};

export default Remeshing;
