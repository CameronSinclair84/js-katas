export const removeDuplicates = (arrayToTest: number[]): number[] => {
  const arrayWithNoDuplicates: number[] = [];
  for (const num of arrayToTest) {
    if (arrayWithNoDuplicates.indexOf(num) === -1) {
      arrayWithNoDuplicates.push(num);
    }
  }
  return arrayWithNoDuplicates;
};
