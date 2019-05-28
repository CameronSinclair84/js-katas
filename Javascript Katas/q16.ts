export const onlyDigits = (stringToTest: string): boolean => {
  return !isNaN(parseInt(stringToTest));
};
