// export const findMultipleDuplicates = (arrayToTest: number[]) => {
//   const searchForDuplicates: number[] = [];
//   const returnedArray: number[] = [];
//   arrayToTest.sort((a, b) => a - b);
//   for (let index = 0; index < arrayToTest.length; index++) {
//     if (searchForDuplicates.indexOf(arrayToTest[index]) === -1) {
//       searchForDuplicates.push(arrayToTest[index]);
//     } else {
//       returnedArray.push(arrayToTest[index]);
//     }
//   }
//   return returnedArray;
// };

export const findMultipleDuplicates = (arrayToTest: number[]): number[] => {
  const searchForDuplicates: number[] = [];
  const returnedArray: number[] = [];
  for (let num of arrayToTest) {
    if (searchForDuplicates.indexOf(num) === -1) {
      searchForDuplicates.push(num);
    } else {
      returnedArray.push(num);
    }
  }
  return returnedArray;
};
