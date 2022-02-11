// components
import Image from "next/image";
import ContentElement from "../src/components/layout/contentElement";
import ScrollContainer from "../src/components/layout/scrollContainer";
import ScrollElement from "../src/components/layout/scrollElement";
// content
import contentData from "../src/constants/content.json";
import img1 from "../src/assets/boy.png";
import img2 from "../src/assets/pencil.png";
import img3 from "../src/assets/link.png";
import img4 from "../src/assets/chat.png";

const ScrollElements = () => {
  const content = contentData.content;
  const varyingBG = ["#111", "#222"];
  const srcSet = [img1, img2, img3, img4];

  const elements = content.map((section, i) => {
    const bgIndex = (i + 1) % (content.length / 2);
    const bg = varyingBG[0];

    // image component
    const Img = () => (
      <Image
        priority={i === 0}
        objectFit="cover"
        src={srcSet[i]}
        width="350px"
        height="350px"
        alt=""
      />
    );

    // content component
    const Content = () => {
      return (
        <>
          {section.text.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </>
      );
    };

    // all the content placed inside the scroll element
    return (
      <ScrollElement key={i} bg={bg}>
        <ContentElement>
          <Img />
          <h2>{section.title}</h2>
          <Content />
        </ContentElement>
      </ScrollElement>
    );
  });
  // concatnation of 'ScrollElements' mapped from the content array
  return <> {elements} </>;
};

const Home = () => {
  return (
    <ScrollContainer>
      <ScrollElements />
    </ScrollContainer>
  );
};

export default Home;
