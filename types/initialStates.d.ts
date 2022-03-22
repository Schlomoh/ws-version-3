interface contentInitialState {
    title: string;
    subTitle: string;
    image: string | StaticImageData;
    link: string;
}

interface ICookieSelection {
    [key: string];
    analysis: boolean;
    advertisement: boolean;
  }

interface IcookieInitialState {
    selection: ICookieSelection;
    showManageView: boolean;
    showModal: boolean
  }