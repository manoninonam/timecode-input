import { styled } from "@mui/material/styles";
import { Stack, Box, Typography, Accordion } from "@mui/material";

export const ExampleTimecodeContainer = styled(Stack)({
  minWidth: "150px",
  padding: "12px",
  border: "white 1px solid",
});

export const ExampleTextContainer = styled(Box)({
  padding: "12px",
  border: "white 1px solid",
  backgroundColor: "#15182D",
  flexGrow: 1,
});

export const ExampleTimecodeContainerText = styled(Typography)({
  fontSize: '12px',
  fontStyle: 'italic'
});

export const ExampleTextAccordion = styled(Accordion)({
  
})
