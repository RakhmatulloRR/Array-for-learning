Array.prototype.forEach1 = function (callback) {
  for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
  }
}

// !======== Test =========
const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

output.forEach1((elem, i, arr) => {
  console.log(arr);
}); // 1 2 3 4 5 6 7 8 9 10

