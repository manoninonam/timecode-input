import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import { palette } from "../utils/palette";

type DocumentationTextAccordionProps = {
  content: {
    text: string;
    subContent: any;
  };
};

const DocumentationTextAccordion = ({
  content,
}: DocumentationTextAccordionProps) => {
  const { text, subContent } = content;

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
        {Object.entries(subContent).map(([key, value]: any) => (
          <Stack key={key}>
            <Typography sx={{ fontStyle: "italic", paddingTop: 2 }}>
              {value.title}
            </Typography>
            <Typography>{value.text}</Typography>
          </Stack>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default DocumentationTextAccordion;
