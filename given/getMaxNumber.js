let numbers = [];
let maxNumber = getMaxNumber(numbers);
console.log(maxNumber);

function getMaxNumber(nums) {
  if (nums.length === 0) {
    return undefined 
  }
  let maxNumber = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxNumber) {
      maxNumber = nums[i];
    }
  }
  return maxNumber;
}
