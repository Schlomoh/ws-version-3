import BaseProjectPage from "../../components/baseProjectPage";
import image from "../../assets/img/graffiti.jpg";
import { PaddingContainer } from "../../components/globalStyledComponents";

export const ocrFormattingContent = {
  title: "OCR Reformatting.",
  subTitle: "Using Tesseract.js.",
  image: image,
  link: "/projects/ocrReformatting",
} as IPageTitleContent;

const content = ocrFormattingContent;

const OcrReformatting = () => {
  return (
    <BaseProjectPage menuHeaderContent={content}>
      <PaddingContainer>
        <h4></h4>
      </PaddingContainer>
    </BaseProjectPage>
  );
};

export default OcrReformatting;
