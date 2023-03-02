/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 1; i <= arr.length; i += 2) {
    for (let a = 0; a < arr.length; a++) {
      sum += a;
    }
  }
};
let arr = [1, 4, 2, 5, 3];
//Output: 58
sumOddLengthSubarrays(arr);
