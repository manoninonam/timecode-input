import { Stack } from "@mui/material";
import TimecodeInput from "../../components/TimecodeInput/TimecodeInput";
import { DocumentationTimecodeContainerText } from "../DisplayComponents";
import {
  MarkIn,
  MarkOut,
  MarkerFilled,
} from "../../components/TimecodeInput/TimecodeInputIcons";
import { TimecodeInputButton } from "../../components/TimecodeInput/TimecodeInputButton";

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
