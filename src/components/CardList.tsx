import { Stack } from "@mui/material";
import { ResultCard } from "./Card";
import React from "react";

export default function CardList(data: any) {
  const searchResults = data.data;

  return (
    <Stack direction='row' flexWrap='wrap'>
      {searchResults && searchResults.map((searchResult: any, index:number) => (
        <ResultCard searchResult={searchResult}/>
      ))}
    </Stack>
  );
}
