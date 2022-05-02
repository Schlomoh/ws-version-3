import BaseProjectPage from "../../components/baseProjectPage";
import NoProject from "../../components/noProject";
import { PaddingContainer } from "../../components/globalStyledComponents";

import image from "../../assets/img/graffiti.jpg";

export const ocrFormattingContent = {
  title: "OCR Reformatting.",
  subTitle: "Using Tesseract.js.",
  image: image,
  link: "/projects/ocrReformatting",
  githubSource: "https://github.com/Schlomoh/OCR-text-formatting",
} as IPageTitleContent;

const content = ocrFormattingContent;

const OcrReformatting = () => {
  return (
    <BaseProjectPage menuHeaderContent={content}>
      <PaddingContainer>
        <NoProject />
      </PaddingContainer>
    </BaseProjectPage>
  );
};

export default OcrReformatting;
