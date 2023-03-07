Array.prototype.every1 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};
// !========== Test ===========
const arr = [2, 3, 4, 5, 6, 7, 8];
const res = arr.every1((item, i, arr) => {
  return item < 5;
});
console.log(res);
