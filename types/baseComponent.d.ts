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
  Content: () => JSX.Element;
  title: string;
  subtitle: string;
}
