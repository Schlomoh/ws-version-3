import { NextPage } from "next";
import Image from 'next/image'
import { PageHead } from "../src/components/Head";

// layout
import ContentRow from "../src/components/layout/ContentRow";
import { StPicture } from "../src/components/layout/Picture/picStyle";

// values
import values from "../src/constants/strings.json";

import img from '../src/assets/img.jpg'

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
        <ContentRow bgColor="white">
          <>
            <h1>{text.greet.heading}</h1>
            <h3>{text.greet.subHeading}</h3>
          </>
          <>
    <Image src={img} alt="" layout="fill"/>
          </>
        </ContentRow>
        <ContentRow bgColor="white">
          <>
            <h1>{text.greet.heading}</h1>
            <h3>{text.greet.subHeading}</h3>
          </>
        </ContentRow>
        <ContentRow bgColor="white">
          <>
            <h1>{text.greet.heading}</h1>
            <h3>{text.greet.subHeading}</h3>
          </>
        </ContentRow>
        <ContentRow bgColor="white">
          <>
            <h1>{text.greet.heading}</h1>
            <h3>{text.greet.subHeading}</h3>
          </>
          <>
            <h1>{text.greet.heading}</h1>
            <h3>{text.greet.subHeading}</h3>
          </>
        </ContentRow>
      </main>
    </>
  );
};

export default HomePage;
