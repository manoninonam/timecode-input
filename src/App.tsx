import { Container, Stack, Typography } from "@mui/material";
import ExampleTitle from "./documentation/ExampleTitle";
import DocumentationText, {
  documentationTextObj,
} from "./documentation/DocumentationText";
import FramerateExample from "./documentation/examples/FramerateExample";
import DirectionExample from "./documentation/examples/DirectionExample";
import UsageExamples from "./documentation/examples/UsageExamples";

const { framerate, ltrVsRtl } = documentationTextObj;

function App() {
  return (
    <main className="App">
      <Container>
        <Typography component="h1" variant="h4">
          Timecode input
        </Typography>
        <Typography paddingBottom={2}>
          This project consists of a custom made timecode input. A timecode is a
          sequence of numeric codes generated at regular intervals by a timing
          synchronization system. Timecode is used in video production, show
          control and other applications which require temporal coordination or
          logging of recording or actions. In video production and filmmaking,
          SMPTE timecode is used extensively for synchronization, and for
          logging and identifying material in recorded media.
        </Typography>
        <ExampleTitle title={framerate.title} />
        <Stack spacing={2} py={2}>
          <Stack direction={{ xs: "column", sm: "row" }}>
            <FramerateExample />
            <DocumentationText props={framerate} />
          </Stack>
          <ExampleTitle title={ltrVsRtl.title} />
          <Stack direction={{ xs: "column", sm: "row" }}>
            <DirectionExample />
            <DocumentationText props={ltrVsRtl} />
          </Stack>
          <ExampleTitle title={"Usage examples"} />
          <UsageExamples />
        </Stack>
      </Container>
    </main>
  );
}

export default App;
