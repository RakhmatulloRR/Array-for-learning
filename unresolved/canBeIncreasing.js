// 1909. Remove One Element to Make the Array Strictly Increasing
// Input: 
let nums = [1,2,10,5,7]
// Output: true
// Explanation: By removing 10 at index 2 from nums, it becomes [1,2,5,7].
// [1,2,5,7] is strictly increasing, so return true.

var canBeIncreasing = function(nums) {
  let count = 0
  for(let i=1; i<nums.length; i++){
         // 10          1
      if(nums[i-1] >= nums[i]){
          count++;
          if(i>1 && nums[i-2] >= nums[i]) nums[i] = nums[i-1]  
      }
  }
  return count <= 1;
};