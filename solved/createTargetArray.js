/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
// var createTargetArray = function (nums, index) {
//   let target = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (target[index[i]] || target[index[i]] === 0) {
//       let left = target.slice(0, index[i]);
//       left.push(nums[i]);
//       let right = target.slice(index[i]);
//       target = left.concat(right);
//     } else {
//       target[index[i]] = nums[i];
//     }
//   }
//   return target;
// };
var createTargetArray = function (nums, index) {
  let target = [];
  for (let i = 0; i < nums.length; i++) {
    target.splice(index[i], 0, nums[i]);
  }
  return target;
};
let nums = [0, 1, 0],
  index = [0, 1, 0];
console.log(createTargetArray(nums, index)); // [0,4,1,3,2]
