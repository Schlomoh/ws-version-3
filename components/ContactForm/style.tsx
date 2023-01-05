import styled from "styled-components";

const FormStyle = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form input,
  form textarea {
    border: 0;
    border-radius: ${(props) => props.theme.misc.borderRadius.inner};
    width: 100%;
    margin-bottom: 20px;
    padding: 8px;
    font-family: "Chakra Petch", sans-serif;
    font-size: 18px;
    background-color: ${(props) => props.theme.colors.surface.elevation[1]};
    color: white;
  }

  textarea {
    resize: vertical;
  }

  button {
    cursor: pointer;
  }
`;

export default FormStyle;
