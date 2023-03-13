String.prototype.indexOf1 = function (ch) {
  if (ch === '') {
    return 0;
  }
  for (let i = 0; i < this.length; i++) {
    if (this[i] === ch) {
      return i;
    }
  }
  return -1;
};

//! ====== test ======
const str = 'Hello World';
const index = str.indexOf1('');
console.log(index);
