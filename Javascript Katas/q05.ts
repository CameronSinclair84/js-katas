export const findLargestAndSmallest = (
  arrayToTest: number[]
): { smallest: number; largest: number } => {
  arrayToTest.sort((a, b) => a - b);
  return {
    largest: arrayToTest[arrayToTest.length - 1],
    smallest: arrayToTest[0]
  };
};
