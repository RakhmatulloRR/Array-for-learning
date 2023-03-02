// Input: 
let nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(nums, target) {
  const map = {};
  const N = nums.length;

  for (let i = 0; i < N; i++) {
    const comp = target-nums[i];
    if (comp in map) {
      return [map[comp], i];
    }
    map[nums[i]] = i;
  }
}
console.log(twoSum(nums, target));