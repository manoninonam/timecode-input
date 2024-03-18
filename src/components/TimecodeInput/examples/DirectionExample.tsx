import { Stack } from "@mui/material";
import TimecodeInput from "../TimecodeInput";
import {
  DocumentationTimecodeContainer,
  DocumentationTimecodeContainerText,
} from "../../../documentation/DocumentationLayoutComponents";

const DirectionExample = () => {
  return (
    <DocumentationTimecodeContainer spacing={3}>
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
    </DocumentationTimecodeContainer>
  );
};

export default DirectionExample