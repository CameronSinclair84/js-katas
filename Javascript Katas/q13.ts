export const areRotations = (string1: string, string2: string): boolean => {
  const rotationDegree = string2.indexOf(string1.split("")[0]);
  for (let index = 0; index < string1.length; index++) {
    if (index + rotationDegree >= string1.length) {
      if (string2.indexOf(string1.split("")[index]) != index + rotationDegree - string1.length) {
        return false;
      }
    } else if (string2.indexOf(string1.split("")[index]) != index + rotationDegree) {
      return false;
    }
  }
  return true;
};

// The above works but is obviously way more complicated than your solution! Found it interesting / challenging to do it this way though :)

// export let areRotations = (text1: string, text2: string): boolean => {
//     const extendedText = text1 + text1;
//     return ( extendedText.indexOf(text2) !== -1 ) ? true : false;
// };
