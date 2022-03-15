interface IPageRowProps {
  sticky?: boolean;
  spacer?: number;
  image?: number;
  height? : number;
}

interface ICenterPageContainerProps {
  noPadding?: boolean;
  padding?: string;
  menu?: boolean;
  row? : boolean
}

interface IBasePageProps {
  Content: () => JSX.Element;
  title: string;
  subtitle: string;
}
