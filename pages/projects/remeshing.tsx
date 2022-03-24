import BaseProjectPage from "../../components/baseProjectPage";
import image from "../../assets/img/triangle-surface.jpg";
import { PaddingContainer } from "../../components/globalStyledComponents";

export const remeshContent = {
  title: "Remeshing.",
  subTitle: "Remeshing and UV projection using Pymeshlab.",
  image: image,
  link: "/projects/remeshing",
} as IPageTitleContent;

const content = remeshContent;

const Remeshing = () => {
  return (
    <BaseProjectPage menuHeaderContent={content}>
      <PaddingContainer>

      </PaddingContainer>
    </BaseProjectPage>
  );
};

export default Remeshing;
