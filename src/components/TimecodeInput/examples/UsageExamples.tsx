import { Stack } from "@mui/material";
import {
  DocumentationTimecodeContainer,
  DocumentationTimecodeContainerText,
} from "../../../documentation/DocumentationLayoutComponents";
import { ControlledTimecode } from "./ControlledTimecode";
import { TimecodeWithValue } from "./TimecodeWithValue";
import ButtonIconsExample from "./ButtonIconsExample";

const UsageExamples = () => {
  return (
    <DocumentationTimecodeContainer direction="row" spacing={5}>
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
    </DocumentationTimecodeContainer>
  );
};

export default UsageExamples;
