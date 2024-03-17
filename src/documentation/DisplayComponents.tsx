import { styled } from "@mui/material/styles";
import { Stack, Box, Typography } from "@mui/material";
import { palette } from "../utils/palette";

export const ExampleTimecodeContainer = styled(Stack)({
  minWidth: "150px",
  padding: "12px",
  border: "white 1px solid",
});

export const ExampleTextContainer = styled(Box)({
  padding: "12px",
  border: "white 1px solid",
  backgroundColor: palette.background.textfield,
  flexGrow: 1,
});

export const DocumentationTimecodeContainerText = styled(Typography)({
  fontSize: '12px',
  fontStyle: 'italic'
});

