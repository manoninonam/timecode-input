import { Stack } from "@mui/material";
import TimecodeInput from "../../components/TimecodeInput/TimecodeInput";
import {
  ExampleTimecodeContainer,
  DocumentationTimecodeContainerText,
} from "../DisplayComponents";

const DirectionExample = () => {
  return (
    <ExampleTimecodeContainer spacing={3}>
      <Stack>
        <DocumentationTimecodeContainerText>
          LTR
        </DocumentationTimecodeContainerText>
        <TimecodeInput frameRate={30} />
      </Stack>
      <Stack>
        <DocumentationTimecodeContainerText>
          RTL
        </DocumentationTimecodeContainerText>
        <TimecodeInput rtl frameRate={30} />
      </Stack>
    </ExampleTimecodeContainer>
  );
};

export default DirectionExample