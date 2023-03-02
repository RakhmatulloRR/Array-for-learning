// 941. Valid Mountain Array
/**
 * @param {number[]} arr
 * @return {boolean}
 */
// example-img: https://assets.leetcode.com/uploads/2019/10/20/hint_valid_mountain_array.png
// Input: 
let arr = [0,3,2,1]
// Output: true
const output = validMountainArray(arr);
console.log(output);

 function validMountainArray(arr) {
  const n = arr.length;
  
  if (n < 3) return false;
  
  let pivot = false;
  
  for (let i = 1; i < arr.length - 1; i++) {
      const curr = arr[i];
      const prev = arr[i - 1];
      const next = arr[i + 1];
      
      if (curr > prev && curr > next) {
          pivot = true;
      }
      else if (prev >= curr && next >= curr) {
          return false;
      }
  }
  
  return pivot;
};