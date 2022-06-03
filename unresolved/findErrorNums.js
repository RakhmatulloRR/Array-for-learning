// 645. Set Mismatch

// Example 1:
// Input: 
let nums = [1,2,2,4];
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]
const output = findErrorNums(nums);
console.log(output);

function findErrorNums(nums) {
  let result = [0, 1];
  nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    const prev = nums[i - 1];
    if (cur === prev) {
      result[0] = cur;
    } else if (cur > prev + 1) {
      result[1] = prev + 1;
    }
  }

  if (nums[nums.length - 1] !== nums.length) {
    result[1] = nums.length;
  }

  return result;
}
