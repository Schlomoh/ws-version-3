import { ReactNode } from "react";
import { CenterPageContainer, PageRow, TextWrapper } from "../";
import { Footer } from "../Footer";

interface IBasePageProps {
  children: ReactNode;
}

const BasePage = (props: IBasePageProps) => {
  const { children } = props;

  return (
    <>
      <main>
        <PageRow>
          <CenterPageContainer noPadding>{children}</CenterPageContainer>
        </PageRow>
      </main>
      <Footer />
    </>
  );
};

export default BasePage;
