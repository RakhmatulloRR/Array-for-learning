// 219. Contains Duplicate II
// Input: 
let nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

const output = containsNearbyDuplicate(nums, k)
console.log(output);

function containsNearbyDuplicate(nums, k) {
  let length = nums.length;
  let cache = {};
  for (let i = 0; i < length; i++)  {
      if (i - cache[nums[i]] <= k) {
          return true;
      } else {
          cache[nums[i]] = i;
      };
  };
  return false;
};
/* 
Given an integer array nums and an integer k, 
return true if there are two distinct indices i and j in the array 
such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false */