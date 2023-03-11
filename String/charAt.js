String.prototype.charAt1 = function (index) {
  return this[index];
};

str = 'Hello World';
character = str.charAt1(6);
console.log(character);
