import { BaseProjectPage, NoProject, PaddingContainer } from "../../components";

import image from "../../assets/img/graffiti.jpg";

export const ocrFormattingContent = {
  title: "OCR Reformatting.",
  subTitle: "Using Tesseract.js.",
  image: image,
  link: "/projects/ocrReformatting",
  githubSource: "https://github.com/Schlomoh/OCR-text-formatting",
};

const content = ocrFormattingContent;

const OcrReformatting = () => {
  return (
    <BaseProjectPage>
      <NoProject />
    </BaseProjectPage>
  );
};

export default OcrReformatting;
