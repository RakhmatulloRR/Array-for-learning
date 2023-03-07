Array.prototype.reduce1 = function (callback, currentVal) {
  for (let i = 0; i < this.length; i++) {
    currentVal = callback(this[i], currentVal, i);
  }
  return currentVal;
};
// !====== Test ======

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const currentValue = 0;
const sumWithInitial = array1.reduce1((element, cV) => {
  return element + cV;
}, currentValue);

console.log(sumWithInitial);
// expected output: 10

// xulosa qildingizmi, initial value bu dastlabki current value hisoblanadi.
