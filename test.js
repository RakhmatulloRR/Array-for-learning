Array.prototype.map1 = function (callback) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
      results.push(callback(this[i], i, this));
  }
  return results;
}

let output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
output = output.map1((elem, i, h) => {
  return elem;
});

console.log(output); // [ 3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
