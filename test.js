var divideArray = function (nums) {
  const { length } = nums;
  if (length % 2 !== 0) return false;
  let res = true;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      res = false;
      if (!res) {
        return res;
      }
    }
  }
  return res;
};
let nums = [5, 2, 3, 2, 2, 2, 3, 5];
console.log(divideArray(nums));
