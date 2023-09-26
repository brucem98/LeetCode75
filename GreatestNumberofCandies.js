// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75
// Grab the largest integer from the original candies array
// Initialize an empty array
// Iteratively add the extra candies to each integer in candies array an check if its equal or greater than initial max
// Push the boolean result of the if statement in an empty array and return it

const kidsWithCandies = function (candies, extraCandies) {
  let initialMax = Math.max(...candies);
  let result = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= initialMax) {
      result[i] = true;
    } else {
      result[i] = false;
    }
  }
  return result;
};

console.log(
  kidsWithCandies([2, 3, 5, 1, 3], 3),
  kidsWithCandies([4, 2, 1, 1, 2], 1)
);
