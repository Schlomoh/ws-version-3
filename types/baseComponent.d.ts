interface IPageRowProps {
  sticky?: boolean;
  image?: number;
  height?: number;
  collapseSpeed?: number;
}

interface ICenterPageContainerProps {
  noPadding?: boolean;
  padding?: string;
  menu?: boolean;
  row?: boolean;
}

interface IBasePageProps {
  render: JSX.Element;
  menuHeaderContent: IProjectContent;
}

interface IBaseProjectPageProps {
  children: JSX.Element;
  menuHeaderContent: IProjectContent;
}
