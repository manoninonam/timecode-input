import { styled } from "@mui/material/styles";
import { Stack, Box, Typography } from "@mui/material";
import { palette } from "../utils/palette";
import { PropsWithChildren } from "react";

export const DocumentationTopContainer = ({ children }: PropsWithChildren) => {
  return <Stack direction={{ xs: "column", sm: "row" }}>{children}</Stack>;
};

export const DocumentationTimecodeContainer = styled(Stack)({
  minWidth: "150px",
  padding: "12px",
});

export const DocumentationTextContainer = styled(Box)({
  backgroundColor: palette.background.textfield,
  flexGrow: 1,
});

export const DocumentationTimecodeContainerText = styled(Typography)({
  fontSize: "12px",
  fontStyle: "italic",
});
