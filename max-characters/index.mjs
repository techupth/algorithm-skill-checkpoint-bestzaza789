// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  if (str.length === 0) return null;
  let count = {};

  for (let character of str) {
    if (count[character]) {
      count[character]++;
    } else {
      count[character] = 1;
    }
  }

  let max = 0;
  let maxChar = null;
  for (let character in count) {
    if (count[character] > max) {
      max = count[character];
      maxChar = character;
    }
  }
  return maxChar;
};

console.log(getMaxCharacters("apple1231111"));
