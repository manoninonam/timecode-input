  
  export function fetchDictionaryEntry(searchQuery: string, setSearchResults: any) {
    try {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`
    )
    .then((response) => {
      if (!response.ok) {
        console.log(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((results) => {
      setSearchResults(results)
    });
  }
  catch (error) {
    console.log(error)
  }
}
  