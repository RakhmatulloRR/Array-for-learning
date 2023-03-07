Array.prototype.indexOf1 = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == value) {
      return i;
    }
  }
  return -1;
};

const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10];

console.log(output.indexOf1(9)); // 8
