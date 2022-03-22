import BaseProjectPage from "../../components/baseProjectPage";
import image from "../../assets/img/graffiti.jpg";
import { PaddingContainer } from "../../components/globalStyledComponents";

export const ocrFormattingContent = {
  title: "OCR Reformatting",
  subTitle: "Using tesseractjs",
  image: image,
  link: "/projects/ocrReformatting",
} as IProjectContent;

const content = ocrFormattingContent;

const OcrReformatting = () => {
  return (
    <BaseProjectPage menuHeaderContent={content}>
      <PaddingContainer>
        <h2>{content.title}</h2>
        <h4>{content.subTitle}</h4>
      </PaddingContainer>
    </BaseProjectPage>
  );
};

export default OcrReformatting;
