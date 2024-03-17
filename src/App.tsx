import { Container, Stack, Typography } from "@mui/material";
import DocumentationTitle from "./documentation/DocumentationTitle";
import DocumentationText from "./documentation/DocumentationText";
import { documentationTextObject } from "./documentation/documentationTextObject";
import FramerateExample from "./components/examples/FramerateExample";
import DirectionExample from "./components/examples/DirectionExample";
import UsageExamples from "./components/examples/UsageExamples";
import { DocumentationTopContainer } from "./documentation/DocumentationLayoutComponents";

const { framerate, ltrVsRtl } = documentationTextObject;

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
        <DocumentationTitle title={framerate.title} />
        <Stack spacing={2} py={2}>
          <DocumentationTopContainer>
            <FramerateExample />
            <DocumentationText props={framerate} />
          </DocumentationTopContainer>
          <DocumentationTitle title={ltrVsRtl.title} />
          <DocumentationTopContainer>
            <DirectionExample />
            <DocumentationText props={ltrVsRtl} />
          </DocumentationTopContainer>
          <DocumentationTitle title={"Usage examples"} />
          <UsageExamples />
        </Stack>
      </Container>
    </main>
  );
}

export default App;
