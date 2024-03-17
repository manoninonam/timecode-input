import { Stack } from "@mui/material";
import {
  ExampleTimecodeContainer,
  DocumentationTimecodeContainerText,
} from "../DisplayComponents";
import { ControlledTimecode } from "./ControlledTimecode";
import { TimecodeWithValue } from "./TimecodeWithValue";
import ButtonIconsExample from "./ButtonIconsExample";

const UsageExamples = () => {
  return (
    <ExampleTimecodeContainer direction="row" spacing={5}>
      <Stack>
        <DocumentationTimecodeContainerText>
          Controlled timecode
        </DocumentationTimecodeContainerText>
        <ControlledTimecode />
      </Stack>
      <Stack>
        <DocumentationTimecodeContainerText>
          Timecode with value
        </DocumentationTimecodeContainerText>
        <TimecodeWithValue />
      </Stack>
      <ButtonIconsExample />
    </ExampleTimecodeContainer>
  );
};

export default UsageExamples;
