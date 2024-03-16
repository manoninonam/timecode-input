import { Stack, Typography } from "@mui/material";
import TimecodeInput from "./components/TimecodeInput/TimecodeInput";
import { ControlledTimecode } from "./examples/ControlledTimecode";
import { ControlledTimecodeWithRTL } from "./examples/ControlledTimecodeWithRTL";
import { TimecodeWithValue } from "./examples/TimecodeWithValue";

function App() {
  return (
    <div className="App">
      <Stack spacing={2} p={2}>
        <TimecodeInput frameRate={25} />
        <TimecodeInput frameRate={29.97}/>
        <Typography>Examples</Typography>
        <ControlledTimecode />
        <ControlledTimecodeWithRTL />
        <TimecodeWithValue />
      </Stack>
    </div>
  );
}

export default App;
