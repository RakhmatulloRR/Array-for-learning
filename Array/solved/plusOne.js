// 66. Plus One
// Input: 
let digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
var plusOne = function(digits) {
    let end = digits.length - 1;
    for(let i = end; i >= 0; i--){
        if(digits[i] !== 9){
            digits[i] = digits[i] + 1;
            break;
        } else {
            digits[i] = 0;
        }
    }

    if(digits[0] === 0) digits.unshift(1);
    return digits;
};

console.log(plusOne(digits));