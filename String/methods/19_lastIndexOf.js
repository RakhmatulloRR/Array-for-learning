String.prototype.lastIndexOf1 = function (ch) {
  if (typeof ch === 'undefined') {
    return -1;
  }
  if (ch === '' && typeof ch === 'string') {
    return this.length;
  }
  let j = 1;
  let match = 0;
  for (let i = 1; i <= this.length; i++) {
    console.log(i, this[this.length - i], ch[ch.length - j]);
    if (this[this.length - i] === ch[ch?.length - j]) {
      match++;
      j++;
      if (match === ch.length) {
        console.log('d: ', i, j, match);
        return this.length - i; // this statement is exacuted at the end.
      }
      console.log('a: ', i, j, match);
    } else if (this[this.length - i] === ch[ch.length - 1]) {
      match = 0;
      j = 1;
      console.log('b: ', i, j, match);
    } else {
      match = 0;
      j = 1;
      console.log('c: ', i, j, match);
    }
  }
  return -1;
};

//! ====== test ======
const str = 'Hello World';
const index = str.lastIndexOf('Wo');
const index1 = str.lastIndexOf1('Wo');
console.log(index, index1);
