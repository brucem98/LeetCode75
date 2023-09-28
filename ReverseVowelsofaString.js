// https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75

const reverseVowels = function (s) {
  const vow = s.match(/[aeiou]/gi);
  return s.replace(/[aeiou]/gi, (el) => vow.pop());
};

console.log(
  reverseVowels("hello"), // holle
  reverseVowels("leetcode")
); // leotcede
