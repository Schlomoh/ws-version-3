import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import styled from "styled-components";

interface Props {
  code: string;
  lang: string;
}

const CodeWrapper = styled.div`
  overflow: hidden;
  border-radius: ${(props) => props.theme.misc.borderRadius.outer};

  pre {
    margin: 0;
    padding: 1rem !important;
  }
`;

const CodeExample = ({ code, lang }: Props) => {
  return (
    <CodeWrapper>
      <SyntaxHighlighter
        style={monokaiSublime}
        codeTagProps={{
          style: {
            fontFamily: "Source Code Pro",
            fontSize: "14px",
          },
        }}
        wrapLines={true}
        showLineNumbers={true}
        lineNumberStyle={{ color: "grey" }}
        language={lang}
      >
        {code}
      </SyntaxHighlighter>
    </CodeWrapper>
  );
};

export default CodeExample;
