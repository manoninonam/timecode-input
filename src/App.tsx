import { Stack, Typography } from "@mui/material";
import TimecodeInput from "./components/TimecodeInput/TimecodeInput";
import { ControlledTimecode } from "./examples/ControlledTimecode";
import { ControlledTimecodeWithRTL } from "./examples/ControlledTimecodeWithRTL";
import { TimecodeWithValue } from "./examples/TimecodeWithValue";

function App() {
  return (
    <main className="App">
      <Typography component='h1' variant='h5'>Timecode input</Typography>
      <Stack spacing={2} py={2}>
        <Typography component='h2' variant='h6'>Examples</Typography>
        <TimecodeInput frameRate={25} />
        <TimecodeInput frameRate={29.97}/>
        <ControlledTimecode />
        <ControlledTimecodeWithRTL />
        <TimecodeWithValue />
      </Stack>
    </main>
  );
}

export default App;
