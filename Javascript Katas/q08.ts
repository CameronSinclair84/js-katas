export const findDuplicates = (stringToTest: string): string[] => {
  const characterArray: string[] = stringToTest.split("");
  const nonDuplicates: string[] = [];
  const duplicates: string[] = [];

  for (const character of characterArray) {
    if (!nonDuplicates.includes(character)) {
      nonDuplicates.push(character);
    } else if (!duplicates.includes(character)) {
      duplicates.push(character);
    }
  }

  return duplicates;
};
