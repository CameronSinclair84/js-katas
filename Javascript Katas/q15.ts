export const allPermutations = (stringToProcess: string): string[] => {
  const characterArray = stringToProcess.split("");
  const output: string[] = [];
  if (characterArray.length === 1) {
    return characterArray;
  }

  for (let index = 0; index < characterArray.length; index++) {
    output.push(characterArray[index] + allPermutations(characterArray.splice(index, 1).join("")));
  }

  return output;
};

// Still working on this one
