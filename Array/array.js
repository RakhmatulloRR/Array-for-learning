const users = [
  { id: 1, fn: "Jon1", ln: "Doe1" }, // user
  { id: 2, fn: "Jan2", ln: "Doe2" }, // user
  { id: 3, fn: "Jun3", ln: "Doe3" }, // user
  { id: 4, fn: "Jon4", ln: "Doe4" }, // user
  { id: 5, fn: "Jan5", ln: "Doe5" }, // user
  { id: 6, fn: "Jen5", ln: "Doe5" }, // user
  { id: 7, fn: "Jon5", ln: "Doe5" }, // user
  { id: 8, fn: "Jin5", ln: "Doe5" }, // user
];

console.log(users.reduce());

//ok-> Array.prototype.length
//ok-> Array.prototype.concat()
//ok-> Array.prototype.push()
//ok-> Array.prototype.every()
//ok-> Array.prototype.filter()
//ok-> Array.prototype.find()
//ok-> Array.prototype.forEach()
//ok-> Array.prototype.includes()
//ok-> Array.prototype.indexOf()
//ok-> Array.prototype.map()
//ok-> Array.prototype.toString()
//ok-> Array.prototype.some()




//& ========= Properties ============
//? Array.prototype[@@unscopables]
//& ========= Methods ===========
//  Array.prototype[@@iterator]()
//  get Array[@@species]
//  Array.prototype.at()
// (1) Array.prototype.copyWithin()           // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin
// ? Array.prototype.entries()
// (1) Array.prototype.fill()                 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
//  Array.prototype.findIndex()
//  Array.prototype.flat()
//  Array.prototype.flatMap()
//  Array.from()
//  Array.prototype.groupBy()
//  Array.prototype.groupByToMap()
//  Array.isArray()
// (1) Array.prototype.join()                 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// (1) Array.prototype.keys()
//  Array.prototype.lastIndexOf()
//  Array.of()
// (1) Array.prototype.pop()
//?  Array.prototype.reduce()
//  Array.prototype.reduceRight()
// (1) Array.prototype.reverse()
// (1) Array.prototype.shift()
// (1) Array.prototype.slice()
// (1) Array.prototype.sort()
// (1) Array.prototype.splice()
//  Array.prototype.toLocaleString()
//  Array.prototype.toSource()
// (1) Array.prototype.unshift()
// (1) Array.prototype.values()


//& ========== Inheritance:
//  Function
//& ========== Properties
//  Function.arguments
//  Function.caller
//  Function.displayName
//  Function.length
//  Function.name
//& ========== Methods
//  Function.prototype.apply()
//  Function.prototype.bind()
//  Function.prototype.call()
//  Function.prototype.toSource()
//  Function.prototype.toString()
//  Object
//& ========== Properties
//  Object.prototype.constructor
//  Object.prototype.__proto__
//& ========== Methods
//  Object.prototype.__defineGetter__()
//  Object.prototype.__defineSetter__()
//  Object.prototype.__lookupGetter__()
//  Object.prototype.__lookupSetter__()
//  Object.prototype.hasOwnProperty()
//  Object.prototype.isPrototypeOf()
//  Object.prototype.propertyIsEnumerable()
//  Object.setPrototypeOf()
//  Object.prototype.toLocaleString()
//  Object.prototype.toSource()
//  Object.prototype.toString()
//  Object.prototype.valueOf()