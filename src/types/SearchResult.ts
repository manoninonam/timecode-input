type phonetics = {
    text: string;
    audio: string;
    sourceUrl: string;
    license: {
      name: string;
      url: string;
    };
  };

 export type definitions = {
    definition: string;
    synonyms: string[];
    acronyms: string[];

  }

  export type meanings = {
    partOfSpeech: string;
    definitions: definitions[];
  }


export type searchResult = {
  word: string;
  phonetic: string;
  phonetics: phonetics[];
  meanings: meanings[];
  license: {
    name: string;
    url: string;
  };
  sourceURls: string[];
}