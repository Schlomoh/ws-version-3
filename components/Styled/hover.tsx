const hover = (css: string) => `
  @media (hover:hover) {
    :hover {
      ${css}
    }
  }`;

export default hover;
