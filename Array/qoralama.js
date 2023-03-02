// 2535. Difference Between Element Sum and Digit Sum of an Array
const nums = [1, 15, 6, 3];
function sumOfDigit(nums) {
  let theDigitSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = +nums[i];
    if (element > 9) {
      theDigitSum += sumOfDigit(element.toString().split(''));
    } else {
      theDigitSum += element;
    }
  }
  return theDigitSum;
}
function sumOfElement(nums) {
  let theDigitSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = +nums[i];
    theDigitSum += element;
  }
  return theDigitSum;
}
function differenceOfSum1(nums) { // way 1
  return Math.abs(sumOfDigit(nums) - sumOfElement(nums));
}

const differenceOfSum2 = (nums) => { // way 2
  let [el, dig] = [0, 0];
  nums.forEach((n) => {
    el += n;
    dig += [...String(n)].reduce((a, c) => (a += +c), 0);
  });
  return el - dig;
};
