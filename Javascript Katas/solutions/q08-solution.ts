export let findDuplicates = (text: string): string[] => {
  const stringArray = text.split("");
  const uniqueKeyStore = new Map();
  const output: string[] = [];

  stringArray.forEach(character => {
    if (uniqueKeyStore.get(character) && !output.includes(character)) {
      output.push(character);
    } else {
      uniqueKeyStore.set(character, character);
    }
  });

  return output;
};
