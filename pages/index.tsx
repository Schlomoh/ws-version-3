import { NextPage } from "next";
import { PageHead } from "../src/components/Head";

// layout
import ContentRow from "../src/components/layout/ContentRow";

// values
import values from "../src/constants/strings.json";

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
      <ContentRow top bgColor="white">
          <>
            <h1>{text.greet.heading}</h1>
            <h3>{text.greet.subHeading}</h3>
          </>
        </ContentRow>
        <ContentRow top bgColor="white">
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
