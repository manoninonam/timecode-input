import { Stack, Typography } from "@mui/material";
import TimecodeInput from "./components/TimecodeInput/TimecodeInput";
import { ControlledTimecode } from "./examples/ControlledTimecode";
import { TimecodeWithValue } from "./examples/TimecodeWithValue";
import {
  ExampleTextContainer,
  ExampleTimecodeContainer,
  ExampleTimecodeContainerText,
} from "./layout/DisplayComponents";

function App() {
  return (
    <main className="App">
      <Typography component="h1" variant="h4">
        Timecode input
      </Typography>
      <Typography>
        This project consists of a custom made timecode input. A timecode is a
        sequence of numeric codes generated at regular intervals by a timing
        synchronization system. Timecode is used in video production, show
        control and other applications which require temporal coordination or
        logging of recording or actions. In video production and filmmaking,
        SMPTE timecode is used extensively for synchronization, and for logging
        and identifying material in recorded media.
      </Typography>
      <Typography></Typography>
      <Stack spacing={2} py={2}>
        <Typography component="h2" variant="h5">
          Framerates
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }}>
          <ExampleTimecodeContainer spacing={3}>
            <Stack>
              <ExampleTimecodeContainerText>
                Drop frame timecode
              </ExampleTimecodeContainerText>
              <TimecodeInput frameRate={29.97} />
            </Stack>
            <Stack>
              <ExampleTimecodeContainerText>
                Non-drop frame timecode
              </ExampleTimecodeContainerText>
              <TimecodeInput frameRate={30} />
            </Stack>
          </ExampleTimecodeContainer>
          <ExampleTextContainer>
            <Typography>
              Frame rate is the number of individual video frames that your
              camera captures, per second. In video production, a video’s frame
              rate is expressed as frames per second (fps). There are two types
              of framerates. Drop-frame and non drop-frame.{" "}
            </Typography>
            <Typography>Non-drop frame</Typography>
            <Typography>
              In the non-drop frame method, the frame rate is specified as a
              whole number, such as 30fps or 60fps. This means that each second
              of video is made up of exactly that many frames, and the frames
              are displayed at a consistent rate.
            </Typography>
            <Typography>Drop frame</Typography>
            <Typography>
              In the drop frame method, the frame rate is specified as a
              fraction, such as 29.97fps or 59.94fps. This means that the actual
              rate at which frames are displayed is slightly lower than the
              specified rate, and some frames are “dropped” in order to maintain
              a consistent rate. This method is typically used when the video
              will be broadcast over television, where the frame rate must be
              synchronized with the broadcast signal.
            </Typography>
          </ExampleTextContainer>
        </Stack>
        <Typography component="h2" variant="h5">
          LTR vs RTL
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }}>
          <ExampleTimecodeContainer spacing={3}>
            <Stack>
              <ExampleTimecodeContainerText>LTR</ExampleTimecodeContainerText>
              <TimecodeInput frameRate={30} />
            </Stack>
            <Stack>
              <ExampleTimecodeContainerText>RTL</ExampleTimecodeContainerText>
              <TimecodeInput rtl frameRate={30} />
            </Stack>
          </ExampleTimecodeContainer>
          <ExampleTextContainer>
            <Typography>
              To accomodate the different preferences in direction while
              inserting a timecode, two variants have been made.{" "}
            </Typography>
          </ExampleTextContainer>
        </Stack>
        <Typography component="h2" variant="h5">
          Usage examples
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }}>
          <ExampleTimecodeContainer spacing={3}>
            <Stack>
              <ExampleTimecodeContainerText>
                Controlled timecode
              </ExampleTimecodeContainerText>
              <ControlledTimecode />
            </Stack>
            <Stack>
              <ExampleTimecodeContainerText>
                Timecode with value
              </ExampleTimecodeContainerText>
              <TimecodeWithValue />
            </Stack>
          </ExampleTimecodeContainer>
          <ExampleTextContainer>
            <Typography>Here are some usage examples.</Typography>
          </ExampleTextContainer>
        </Stack>
      </Stack>
    </main>
  );
}

export default App;
