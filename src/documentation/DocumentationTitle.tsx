import { Box, Divider, Typography } from "@mui/material";
import { palette } from "../utils/palette";

type ExampleTitleProps = {
  title: string
}

const DocumentationTitle = ({ title }: ExampleTitleProps) => {
  return (
    <Box>
      <Typography component="h2" variant="h5">
        {title}
      </Typography>
      <Divider sx={{ background: palette.text.primary }} />
    </Box>
  );
};

export default DocumentationTitle