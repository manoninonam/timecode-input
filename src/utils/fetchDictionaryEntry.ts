
  const baseURL = `https://api.dictionaryapi.dev/api/v2/entries/en/`
  
  export async function fetchDictionaryEntry(searchQuery: string) {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const results = await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  }
  