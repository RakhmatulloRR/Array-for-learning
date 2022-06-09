Array.prototype.forEach1 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const elm = this[i];
    callback(elm, i, arr);
  }
};

// !======== Test =========
const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

output.forEach1((elem, i, arr) => {
  return i;
}); // 1 2 3 4 5 6 7 8 9 10
console.log(a);
