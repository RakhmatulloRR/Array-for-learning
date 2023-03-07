Array.prototype.push1 = function (...values) {
  const arrayLength = this.length;
  for (let i = 0; i < values.length; i++) {
    this[arrayLength + i] = values[i];
  }
  return this.length;
};

const array = ['a', 'b', 'c', 'd'];

const res = array.push1('e', 'f');
console.log(res, array); // 6 [ 'a', 'b', 'c', 'd', 'e', 'f' ]
