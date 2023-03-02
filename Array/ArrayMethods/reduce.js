Array.prototype.reduce1 = function (callback, initialVar) {
  for (let i = 0; i < this.length; i++) {
    initialVar = callback(this[i], initialVar, i);
  }
  return initialVar;
};
// !====== Test ======

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce1((pV, cV) => {
  console.log(pV, cV);
  return pV + cV;
}, initialValue);

console.log(sumWithInitial);
// expected output: 10
