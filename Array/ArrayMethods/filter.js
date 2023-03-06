Array.prototype.filter1 = function (callback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (callback(element, i, this)) {
      newArr.push(element);
    }
  }
  return newArr;
};
// !========== Test ===========
const arr = [2, 3, 4, 5, 6, 7, 8];
const res = arr.filter1((item, i, arr) => item > 5);
console.log(res);
