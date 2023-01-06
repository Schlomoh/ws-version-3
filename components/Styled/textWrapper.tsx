import styled from "styled-components";

interface Props {
  small?: boolean;
  center?: boolean;
  underline?: boolean;
  mode?: "default" | "contrast";
}

const TextWrapper = styled.span<Props>`
  --linkColor: ${(props) =>
    props.color
      ? props.color
      : props.mode === "contrast"
      ? props.theme.text.colors.contrast.link
      : props.theme.text.colors.link};
  --paragraphColor: ${(props) =>
    props.color
      ? props.color
      : props.mode === "contrast"
      ? props.theme.text.colors.contrast.paragraph
      : props.theme.text.colors.paragraph};
  --headingColor: ${(props) =>
    props.color
      ? props.color
      : props.mode === "contrast"
      ? props.theme.text.colors.contrast.heading
      : props.theme.text.colors.heading};
  --subheadingColor: ${(props) =>
    props.color
      ? props.color
      : props.mode === "contrast"
      ? props.theme.text.colors.contrast.subHeading
      : props.theme.text.colors.subHeading};

  text-align: ${(props) => (props.center ? "center" : "initial")};

  ul {
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  ${(props) =>
    props.underline &&
    `
  p,
  h1,
  h2,
  h3,
  h4,
  h5`},
  a {
    color: var(--linkColor);
    background: linear-gradient(transparent, transparent),
      linear-gradient(var(--linkColor), var(--linkColor));
    background-size: 100% 0.1em, 0 0.1em;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 0.3s, 0.3s;
  }

  a:hover,
  a:focus,
  h3:hover,
  h3:focus {
    background-size: 0 0.1em, 100% 0.1em;
    color: var(--linkColor);
  }

  p,
  a,
  li {
    list-style-type: none;
    font-size: ${(props) => (props.small ? "14px" : "")};
    color: var(--paragraphColor);
  }

  h1,
  h2 {
    color: var(--headingColor);
  }

  h3,
  h4,
  h5,
  h6 {
    color: var(--subheadingColor);
  }
`;

export default TextWrapper;
