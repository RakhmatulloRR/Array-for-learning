String.prototype.includes1 = function (str) {
  if (!str) {
    return false;
  }
  let j = 0;
  let match = 0;
  for (let i = 0; i < this.length; i++) {
    console.log(i, this[i], str[j]);
    if (this[i] === str[j]) {
      match++;
      j++;
      if (match === str.length) {
        console.log('d: ', i, j, match);
        return true; // this statement is exacuted at the end.
      }
      console.log('a: ', i, j, match);
    } else if (this[i] === str[0]) {
      match = 0;
      j = 0;
      console.log('b: ', i, j, match);
    } else {
      match = 0;
      j = 0;
      console.log('c: ', i, j, match);
    }
  }
  return false;
};

//! ====== test ======
const text = 'aaa bbb ccc abc ddd!';
const index = text.includes1('abc');
console.log(index);
