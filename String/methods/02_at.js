String.prototype.at1 = function (index) {
  if (index < 0) {
    index = this.length + index;
  }
  return this[index];
};

str = 'Hello World';
character1 = str.at1(-3);
character = str.at(-3);
console.log(character1);
console.log(character);
