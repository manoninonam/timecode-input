// when input type is number, the max length attribute doesn't prohibit the user to insert more characters. It only validates onBlur.
export const limitMaxCharacters = (string: string, size: number) => {
  return Math.max(0, parseInt(string)).toString().slice(0, size);
};
