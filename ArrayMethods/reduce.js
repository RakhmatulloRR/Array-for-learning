Array.prototype.reduce1 = function (callback, initialVar) {
  for (let i = 0; i < this.length; i++) {
    initialVar = callback(this[i], initialVar, i);
  }
  return initialVar;
};

// !====== Test ======

const array1 = [1, 2, 3, 4];
const reducedValue = array1.reduce1((pv, cv, i) => {
  console.log('i = ', i, 'bolganida: ', pv, cv);
  return pv + cv;
}, 6);
console.log(reducedValue);
// expected output: 10
