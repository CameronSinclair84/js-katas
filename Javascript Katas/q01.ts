export const missingNumberInSequence = (arrayToTest: number[]): number[] => {
  const returnedArray: number[] = [];
  arrayToTest.sort((a, b) => a - b);
  const firstNumber = arrayToTest[0];
  const lastNumber = arrayToTest[arrayToTest.length - 1];

  for (let index = firstNumber; index < lastNumber; index++) {
    if (arrayToTest.indexOf(index) === -1) {
      returnedArray.push(index);
    }
  }

  return returnedArray;
};
