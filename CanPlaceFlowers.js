// https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75

var canPlaceFlowers = function (flowerbed, n) {
    for (let i = 0; i < flowerbed.length && n > 0; i++) {
      if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
        flowerbed[i] = 1;
        n--;
      }
    }
    return n === 0
  };

  console.log(canPlaceFlowers([1,0,0,0,1], 1), //true
  canPlaceFlowers([1,0,0,0,1], 2)); //false