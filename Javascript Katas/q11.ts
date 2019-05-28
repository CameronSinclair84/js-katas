export const palindrome = (stringToTest: string): boolean => {
  const regexPattern = /[^A-Za-z0-9]/g;
  const lettersNumbersOnly = stringToTest
    .toLowerCase()
    .replace(regexPattern, "");
  const reversedString = lettersNumbersOnly
    .split("")
    .reverse()
    .join("");
  return lettersNumbersOnly === reversedString;
};
