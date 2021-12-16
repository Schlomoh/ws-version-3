import { NextPage } from "next";
import { PageHead } from "../src/components/Head";

// layout
import ContentRow from "../src/components/layout/ContentRow";

// values
import values from "../src/constants/strings.json";

import img1 from "../src/assets/img1.jpg";
import img2 from "../src/assets/img2.jpg";
import img3 from "../src/assets/img3.jpg";

import Picture from "../src/components/graphics/Picture";
import TdCanvas from "../src/components/graphics/ThreeDObject";

const HomePage: NextPage = () => {
  const text = values.home;
  const headValues = text.head;

  return (
    <>
      <PageHead
        title={headValues.title}
        description={headValues.description}
        keywords={headValues.keywords}
      />
      <main>
        <ContentRow height="full" bgColor="white">
          <>
            <h1>{text.greet.heading}</h1>
            <h3>{text.greet.subHeading}</h3>
          </>
        </ContentRow>
        <ContentRow transition bgColor="white">
          <TdCanvas />
        </ContentRow>
        <ContentRow transition bgColor="white">
          <>
            <h3>{text.greet.subHeading}</h3>
            <p>
              Schönes Bild mit schöne frau ist schön weil schöne frau schöne
              ist. schön ist halt schön. schön.{" "}
            </p>
          </>
          <>
            <Picture src={img1} alt="" />
            <p>
              woooow, pretty picture of human. Big like. It beatiful like not
              cold coffee
            </p>
          </>
        </ContentRow>
        <ContentRow transition bgColor="white">
       
            <Picture src={img2} alt="" />
       
          <>
            <h3>{text.greet.subHeading}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              nobis culpa magnam non quas illo minus enim, eaque, repellat
              aspernatur, optio tempore exercitationem maxime in dicta iure at
              libero totam!
            </p>
          </>
        </ContentRow>
        <ContentRow transition>
          <>
            <h2>New heading, new luck</h2>
            <h3>esketit, sir.</h3>
          </>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            quis, vel velit sunt ratione soluta eius beatae quo, incidunt
            perspiciatis debitis nobis, dolore consectetur iste distinctio ad
            pariatur repudiandae? Porro!
          </p>
        </ContentRow>
        <ContentRow transition>
          <>
            <h3>Joooo this just a pic</h3>
            {/* <Picture src={img3}/> */}
          </>
        </ContentRow>
      </main>
    </>
  );
};

export default HomePage;
