export const swapWithoutThirdVariable = (numbersToSwap: number[]): number[] => {
  let variable1 = numbersToSwap[0];
  let variable2 = numbersToSwap[1];

  variable1 += variable2;
  variable2 = variable1 - variable2;
  variable1 -= variable2;

  return [variable1, variable2];
};
