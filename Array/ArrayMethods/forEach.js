Array.prototype.forEach1 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// !======== Test =========
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.forEach1((elem, i, arr) => {
  console.log(elem);
}); // 1 2 3 4 5 6 7 8 9 10
