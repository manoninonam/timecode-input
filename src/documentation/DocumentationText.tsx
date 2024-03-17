import { Typography } from "@mui/material";
import { DocumentationTextContainer } from "./DocumentationLayoutComponents";
import DocumentationTextAccordion from "./DocumentationTextAccordion";type DocumentationTextProps = {
  props: {
    title: string;
    content: {
      text: string;
      subContent: any;
    };
    isAccordeon: boolean;
  };
};

const DocumentationText = ({ props }: DocumentationTextProps) => {
  const { content, isAccordeon } = props;

  return (
    <DocumentationTextContainer>
      {isAccordeon ? (
        <DocumentationTextAccordion content={content} />
      ) : (
        <Typography>{content.text}</Typography>
      )}
    </DocumentationTextContainer>
  );
};

export default DocumentationText;
