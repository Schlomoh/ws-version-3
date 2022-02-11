import ContentElement from "../src/components/layout/contentElement";
import ScrollContainer from "../src/components/layout/scrollContainer";
import ScrollElement from "../src/components/layout/scrollElement";
import contentData from "../src/content/content.json";

import img1 from "../src/assets/boy.png";
import img2 from "../src/assets/pencil.png";
import img3 from "../src/assets/link.png";
import img4 from "../src/assets/chat.png";
import Image from "next/image";

const Home = () => {
  function ScrollElements() {
    const content = contentData.content;
    const varyingBG = ["#111", "#222"];
    const srcSet = [img1, img2, img3, img4];

    const elements = content.map((section, i) => {
      const bgIndex = (i + 1) % (content.length / 2);
      const bg = varyingBG[0];
      const img = srcSet[i] ? (
        <Image
          priority
          objectFit="cover"
          src={srcSet[i]}
          width="350px"
          height="350px"
          alt=""
        />
      ) : (
        <></>
      );

      return (
        <ScrollElement key={i} bg={bg}>
          <ContentElement>
            {img}
            <h2>{section.title}</h2>
            <>
              {section.text.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </>
          </ContentElement>
        </ScrollElement>
      );
    });
    return <> {elements} </>;
  }
  return (
    <ScrollContainer>
      {/* <NarratorElement /> */}
      <ScrollElements />
    </ScrollContainer>
  );
};

export default Home;
