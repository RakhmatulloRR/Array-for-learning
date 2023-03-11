String.prototype.charAt1 = function (index) {
  return this[index] || '';
};

str = 'Hello World';
character = str.charAt(-1);
console.log(character);
