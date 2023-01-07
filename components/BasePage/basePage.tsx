import { CenterPageContainer, PageRow, TextWrapper } from "../";
import { Footer } from "../Footer";

interface IBasePageProps {
  children: JSX.Element;
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
