export const reverseWordsInSentence = (stringToReverse: string): string => {
  return stringToReverse
    .split(" ")
    .reverse()
    .join(" ");
};
