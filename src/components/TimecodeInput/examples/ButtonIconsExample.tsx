import { Stack } from "@mui/material";
import TimecodeInput from "../TimecodeInput";
import { DocumentationTimecodeContainerText } from "../../../documentation/DocumentationLayoutComponents";
import {
  MarkIn,
  MarkOut,
  MarkerFilled,
} from "../TimecodeInputIcons";
import { TimecodeInputButton } from "../TimecodeInputButton";

const ButtonIconsExample = () => {
  return (
    <Stack direction='row' spacing={5}>
      <Stack>
        <DocumentationTimecodeContainerText>
          Timecode mark-in button
        </DocumentationTimecodeContainerText>
        <TimecodeInput
          frameRate={30}
          endButton={
            <TimecodeInputButton
              sx={{ display: "flex", alignItems: "center" }}
              position="end"
            >
              <MarkIn fontSize="small" />
            </TimecodeInputButton>
          }
        />
      </Stack>
      <Stack>
        <DocumentationTimecodeContainerText>
          Timecode mark-out button
        </DocumentationTimecodeContainerText>
        <TimecodeInput
          frameRate={30}
          endButton={
            <TimecodeInputButton
              sx={{ display: "flex", alignItems: "center" }}
              position="end"
            >
              <MarkOut fontSize="small" />
            </TimecodeInputButton>
          }
        />
      </Stack>
      <Stack>
        <DocumentationTimecodeContainerText>
          Timecode marker-filled button
        </DocumentationTimecodeContainerText>
        <TimecodeInput
          frameRate={30}
          endButton={
            <TimecodeInputButton
              sx={{ display: "flex", alignItems: "center" }}
              position="end"
            >
              <MarkerFilled fontSize="small" />
            </TimecodeInputButton>
          }
        />
      </Stack>
    </Stack>
  );
};

export default ButtonIconsExample;
