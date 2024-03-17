import { Stack } from "@mui/material";
import TimecodeInput from "../TimecodeInput/TimecodeInput";
import { DocumentationTimecodeContainer, DocumentationTimecodeContainerText } from "../../documentation/DocumentationLayoutComponents";

const FramerateExample = () => {
  return (
    <DocumentationTimecodeContainer spacing={3}>
      <Stack>
        <DocumentationTimecodeContainerText>
          Drop frame timecode
        </DocumentationTimecodeContainerText>
        <TimecodeInput frameRate={29.97} />
      </Stack>
      <Stack>
        <DocumentationTimecodeContainerText>
          Non-drop frame timecode
        </DocumentationTimecodeContainerText>
        <TimecodeInput frameRate={30} />
      </Stack>
    </DocumentationTimecodeContainer>
  );
};

export default FramerateExample