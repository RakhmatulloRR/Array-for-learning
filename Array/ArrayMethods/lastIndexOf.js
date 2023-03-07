Array.prototype.lastIndexOf1 = function (value) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] == value) {
      return i;
    }
  }
  return -1;
};
// !========== Test ==========
const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10];

console.log(output.lastIndexOf1(9)); // 9
