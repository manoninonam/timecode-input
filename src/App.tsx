import { OutlinedInput, Button } from "@mui/material";
import { fetchDictionaryEntry } from "./utils/fetchDictionaryEntry";
import { useState } from "react";
import CardList from "./components/CardList";


function App() {

  const [ searchQuery, setSearchQuery ] = useState<string>('')
  const [ searchResults, setSearchResults ] = useState<any>('')

  return (
    <div className="App">
      <OutlinedInput value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
      <Button onClick={() => setSearchResults(fetchDictionaryEntry(searchQuery, setSearchResults))}>Search</Button>
      <CardList data={searchResults}/>
    </div>
  );
}

export default App;
