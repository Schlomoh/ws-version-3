import BaseProjectPage from "../../components/baseProjectPage";
import image from "../../assets/img/wave-surface.jpg";
import { PaddingContainer } from "../../components/globalStyledComponents";

export const usdzConversionContent = {
  title: "USDZ Conversion.",
  subTitle: "GLB to USDZ conversion using Docker.",
  image: image,
  link: "/projects/usdzConversion",
} as IPageTitleContent;

const content = usdzConversionContent;

const UsdzConversion = () => {
  return (
    <BaseProjectPage menuHeaderContent={content}>
      <PaddingContainer>
        <h4></h4>
      </PaddingContainer>
    </BaseProjectPage>
  );
};

export default UsdzConversion;
