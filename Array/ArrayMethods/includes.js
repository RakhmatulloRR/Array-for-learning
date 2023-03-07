Array.prototype.includes1 = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === value) {
      return true;
    }
  }
  return false;
};
// !========== Test ===========
const arr = [2, 3, 4, 5, 6, 7, 8];
const result = arr.includes1(9);
console.log(result);
