export const findDuplicate = (arrayToTest: number[]) => {
  arrayToTest.sort((a, b) => a - b);
  for (let index = 0; index < arrayToTest.length; index++) {
    if (arrayToTest[index] === arrayToTest[index + 1]) {
      return arrayToTest[index];
    }
  }
  return undefined;
};
