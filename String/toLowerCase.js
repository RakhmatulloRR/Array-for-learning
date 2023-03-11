String.prototype.toLowerCase1 = function () {
  upper = '';
  for (let i = 0; i < this.length; i++) {
    if (str.charCodeAt(i) > 64 && this.charCodeAt(i) < 91) {
      upper += String.fromCharCode(this.charCodeAt(i) + 32);
    } else {
      upper += this[i];
    }
  }
  return upper;
};

str = 'Hello World';
upper = str.toLowerCase1();
console.log(upper);
