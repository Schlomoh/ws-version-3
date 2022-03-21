interface contentInitialState {
    title: string;
    subTitle: string;
    imgSrc: string;
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