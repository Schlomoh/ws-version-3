import { CenterPageContainer, PageRow } from "./globalStyledComponents";

const BasePage = (props: IBasePageProps) => {
  const { Content, image } = props;

  return (
    <main>
      <PageRow>
        <CenterPageContainer noPadding>
          <Content />
        </CenterPageContainer>
      </PageRow>

      <PageRow>
        <CenterPageContainer>
          <footer />
        </CenterPageContainer>
      </PageRow>
    </main>
  );
};

export default BasePage;
