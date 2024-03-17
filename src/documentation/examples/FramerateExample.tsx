import { Stack } from "@mui/material";
import TimecodeInput from "../../components/TimecodeInput/TimecodeInput";
import { ExampleTimecodeContainer, DocumentationTimecodeContainerText } from "../DisplayComponents";

const FramerateExample = () => {
  return (
    <ExampleTimecodeContainer spacing={3}>
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
    </ExampleTimecodeContainer>
  );
};

export default FramerateExample