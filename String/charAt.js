String.prototype.charAt = function (index) {
  return this[index];
};

str = 'Hello World';
character = str.charAt(6);
console.log(character);
