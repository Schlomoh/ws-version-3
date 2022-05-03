import styled from "styled-components";

const FormStyle = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form input,
  form textarea {
    width: 100%;
    margin-bottom: 20px;
    padding: 8px;
    font-family: "Chakra Petch", sans-serif;
    font-size: 18px;
    background-color: rgb(60, 60, 60);
    border: grey solid 1px;
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
