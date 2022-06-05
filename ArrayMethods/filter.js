const filter1 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};
Array.prototype.filter1 = filter1;
// !========== Test ===========
const arr = [2, 3, 4, 5, 6, 7, 8];
console.log(arr.filter((item, i, arr) => i));

// node Methods/filter.js

