import styled from "styled-components";
import BasePage from "./basePage";

const ProjectPage = styled.div``;

const BaseProjectPage = ({
  children,
  menuHeaderContent,
}: IBaseProjectPageProps) => {
  return (
    <BasePage
      menuHeaderContent={menuHeaderContent}
      render={children}
    ></BasePage>
  );
};

export default BaseProjectPage;
