// https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75

// Initialize an empty string to store the merged result.
// Traverse both input strings together, picking each character alternately from both strings and appending it to the merged result string.
// Continue the traversal until the end of the longer string is reached.
// Return the merged result string.

const mergeAlternately = function (word1, word2) {
  let mergedString = "";
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) mergedString += word1[i];
    if (i < word2.length) mergedString += word2[i];
  }
  return mergedString;
};

console.log(mergeAlternately("abc", "pqr"), mergeAlternately("ab", "pqrs"));
