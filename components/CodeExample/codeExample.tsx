import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface Props {
  code: string;
  lang: string;
}

const CodeExample = ({ code, lang }: Props) => {
  return (
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
  );
};

export default CodeExample;
