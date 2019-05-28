export const reverseWithRecursion = (stringToReverse: string): string => {
  if (stringToReverse == "") {
    return "";
  } else {
    return (
      reverseWithRecursion(stringToReverse.substr(1)) +
      stringToReverse.charAt(0)
    );
  }
};

// export const reverseWithRecursion = (stringToReverse: string): string => {
//   return stringToReverse === ""
//     ? ""
//     : reverseWithRecursion(stringToReverse.substr(1)) +
//         stringToReverse.charAt(0);
// };
