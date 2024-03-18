import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import { palette } from "../utils/palette";
import { DocumentationContentProps } from "./DocumentationText";

type DocumentationTextAccordionProps = {
  content: DocumentationContentProps
};
 
const DocumentationTextAccordion = ({
  content,
}: DocumentationTextAccordionProps) => {
  const { text, subContent } = content;

  console.log(subContent)
  return (
    <Accordion
      disableGutters
      sx={{
        backgroundColor: palette.background.textfield,
        color: palette.text.primary,
        boxShadow: "none",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore style={{ fill: palette.text.primary }} />}
      >
        <Typography>{text}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {subContent?.map((subContentItem: any, i) => (
          <Stack key={i}>
            <Typography sx={{ fontStyle: "italic", paddingTop: 2 }}>
              {subContentItem.title}
            </Typography>
            <Typography>{subContentItem.text}</Typography>
          </Stack>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default DocumentationTextAccordion;
