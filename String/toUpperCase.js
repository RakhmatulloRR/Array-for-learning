String.prototype.toUpperCase1 = function () {
  upper = '';
  for (let i = 0; i < this.length; i++) {
    if (str.charCodeAt(i) > 96 && this.charCodeAt(i) < 123) {
      upper += String.fromCharCode(this.charCodeAt(i) - 32);
    } else {
      upper += this[i];
    }
  }
  return upper;
};

str = 'Hello World';
upper = str.toUpperCase1();
console.log(upper);
