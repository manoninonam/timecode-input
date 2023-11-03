export async function fetchDictionaryEntry(searchQuery: string) {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`
  );
  const fetchedResults = await response.json();
  if (response.ok) {
    return fetchedResults;
  } else {
    return Promise.reject(response);
  }
}
