import {
  Button,
  CardActions,
  CardContent,
  Card as MuiCard,
  Typography,
  styled,
} from "@mui/material";

export const Card = styled(MuiCard)({
  color: "darkslategray",
  width: "400px",
  padding: "10px",
  margin: "10px",
});

export const ResultCard = ({ searchResult, index }: any) => {
  return (
    <Card >
      <CardContent>
        <Typography variant="h5" component="div">
          {searchResult.word}
        </Typography>
        <Typography variant="caption" gutterBottom>
          {searchResult.phonetic}
        </Typography>
        <Typography>meanings:</Typography>
        {searchResult.meanings.map((meaning: any, index: number) => (
          <div key={`meaning-${index}`}>
            <Typography sx={{ mt: 1.5, mb: 0.5 }} color="text.secondary">
              {meaning.partOfSpeech}
            </Typography>
            {meaning.definitions.map((definition: any, index: number) => (
              <Typography key={`definitions-${index}`} sx={{ mb: 0.2 }} variant="body2">
                {definition.definition}
                {`${index + 1}) `}
              </Typography>
            ))}
          </div>
        ))}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
