Array.prototype.some1 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};
// !========== Test ===========
const arr = [2, 3, 4, 5, 6, 7, 8];
const result = arr.some1((item, i, arr) => {
  console.log(item);
  return item === 9;
});
console.log(result);
