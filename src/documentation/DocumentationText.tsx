import { Typography } from "@mui/material";
import { DocumentationTextContainer } from "./DocumentationLayoutComponents";
import DocumentationTextAccordion from "./DocumentationTextAccordion";

type DocumentationProps = {
   props: {
    title: string;
    content: DocumentationContentProps
    isAccordion: boolean;
  };
};

export type DocumentationContentProps = {
    text: string;
    subContent: DocumentationSubTextProps[] | undefined ;
}

type DocumentationSubTextProps = {
  title: string
  text: string
}

const DocumentationText = ({ props }: DocumentationProps) => {
  const { content, isAccordion } = props;

  return (
    <DocumentationTextContainer sx={{
      ...(!isAccordion && {
        padding:'12px'
      })
    }}>
      {isAccordion ? (
        <DocumentationTextAccordion content={content} />
      ) : (
        <Typography>{content.text}</Typography>
      )}
    </DocumentationTextContainer>
  );
};

export default DocumentationText;
