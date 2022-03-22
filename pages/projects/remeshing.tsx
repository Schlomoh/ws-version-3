import BaseProjectPage from "../../components/baseProjectPage";
import image from "../../assets/img/triangle-surface.jpg";
import { PaddingContainer } from "../../components/globalStyledComponents";

export const remeshContent = {
  title: "Remeshing",
  subTitle: "remeshing and UV projection using Pymeshlab",
  image: image,
  link: "/projects/remeshing",
} as IProjectContent;

const content = remeshContent;

const Remeshing = () => {
  return (
    <BaseProjectPage menuHeaderContent={content}>
      <PaddingContainer>
        <h2>{content.title}</h2>
        <h4>{content.subTitle}</h4>
      </PaddingContainer>
    </BaseProjectPage>
  );
};

export default Remeshing;
