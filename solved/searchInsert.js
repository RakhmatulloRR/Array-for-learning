// 35. Search Insert Position
// Input: 
let nums = [1,3,5,6], target = 5
// Output: 2
var searchInsert = function(nums, target) {
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        let cur = nums[i];
        if (cur >= target) {
            return i;
        };
    };
    return length;
};