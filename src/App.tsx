import { OutlinedInput, Button } from "@mui/material";
import { fetchDictionaryEntry } from "./utils/fetchDictionaryEntry";
import { Dispatch, SetStateAction, useState } from "react";
import CardList from "./components/CardList";
import { searchResult } from "./components/types";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<searchResult[]>([]);

  async function handleClick(
    searchQuery: string,
    setSearchResults: Dispatch<SetStateAction<searchResult[]>>
  ) {
    const fetchedResults = fetchDictionaryEntry(searchQuery);
    setSearchResults(await fetchedResults);
  }

  return (
    <div className="App">
      <OutlinedInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button onClick={() => handleClick(searchQuery, setSearchResults)}>
        Search
      </Button>
      <CardList data={searchResults} />
    </div>
  );
}

export default App;
