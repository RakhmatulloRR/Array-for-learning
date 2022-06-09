const reduce1 = function (callback, initialVar) {
  for (let i = 0; i < this.length; i++) {
    initialVar = callback(callback, initialVar);
  }
  return initialVar;
};
Array.prototype.reduce1 = reduce1;

// !====== Test ======

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
