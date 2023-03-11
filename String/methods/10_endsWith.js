String.prototype.endsWith1 = function (str) {
  if (!str) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    if (this[this.length - i] !== str[str.length - i]) {
      return false;
    }
  }
  return true;
};

//! ====== test ======
const text = 'Hello World!';
console.log(text.endsWith1());
