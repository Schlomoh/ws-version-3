import styled from "styled-components";

interface Props {
  small?: boolean;
  center?: boolean;
}

const TextWrapper = styled.span<Props>`
  text-align: ${(props) => (props.center ? "center" : "initial")};
  p,
  li {
    font-size: ${(props) => (props.small ? "14px" : "")};
    color: ${(props) => props.theme.text.colors.paragraph};
  }
  a {
    color: ${(props) => props.theme.text.colors.link};
  }
  a {
    background: linear-gradient(transparent, transparent),
      linear-gradient(
        ${(props) => props.theme.text.colors.link},
        ${(props) => props.theme.text.colors.link}
      );
    background-size: 100% 0.1em, 0 0.1em;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 400ms;
  }

  a:hover,
  a:focus {
    background-size: 0 0.1em, 100% 0.1em;
  }
`;

export default TextWrapper;
