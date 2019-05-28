export const compareAnagrams = (string1: string, string2: string): boolean => {
  return (
    string1
      .toLowerCase()
      .split("")
      .sort()
      .join("") ===
    string2
      .toLowerCase()
      .split("")
      .sort()
      .join("")
  );
};
