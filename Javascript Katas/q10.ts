export const printFirstNonRepeat = (stringToTest: string): string => {
  const characterArrayToTest = stringToTest.split("").sort();
  let output: string = characterArrayToTest[0];
  characterArrayToTest.splice(0, 1);
  const duplicates: string[] = [];

  for (let character of characterArrayToTest) {
    if (output === character) {
      duplicates.push(character);
    }
    if (!duplicates.includes(character)) {
      return character;
    } else {
      output = character;
    }
  }
  return output;
};
