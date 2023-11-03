import { Stack } from "@mui/material";
import { ResultCard } from "./Card";
import { searchResult } from "./types";

type CardListProps = {
  data: searchResult[];
};

export default function CardList(data: CardListProps) {
  const searchResults = data.data;

  return (
    <Stack direction="row" flexWrap="wrap">
      {searchResults &&
        searchResults.map((searchResult: searchResult, index: number) => (
          <ResultCard key={`card-${index}`} searchResult={searchResult} index={index} />
        ))}
    </Stack>
  );
}
