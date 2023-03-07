const map1 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray[i] = callback(this[i], i, this);
  }
  return newArray;
};
Array.prototype.map1 = map1;

//! ============ Test =============
const arr = [1, 2, 'a', 3, 'b'];
console.log(
  arr.map1((item, i) => (typeof item === 'number' ? item : 'not number'))
);

const nums = [2, 4, 6, 8];

var num = 30;

const res = nums.reduce((e, cv) => e + cv, num);
console.log(res);

nums.forEach((elm) => {
  num = num + elm;
});
console.log(num);
