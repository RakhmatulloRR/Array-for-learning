String.prototype.substring1 = function (start, end = -1) {
  if (start < 0 && end < 0) {
    return '';
  }
  if (end == -1) {
    end = this.length;
  }
  if (start > end) {
    // let c = start;
    // start = end;
    // end = c;
    start = start + end; // change variables values
    end = start - end;
    start = start - end;
  }
  if (start < 0) {
    start = 0;
  }
  let substr = '';
  for (i = start; i < end; i++) {
    substr += this[i];
  }
  return substr;
};
//! ====== test ======
str = 'Hello World';
// console.log(str.substring1(5, 0));
console.log(str.substring1(5, -4));
// console.log(str.substring1(3));
