/* The Object.values() method returns an array of 
a given object's own enumerable property values, 
in the same order as that provided by a for...in loop. 
(The only difference is that a for...in loop 
  enumerates properties in the prototype chain as well.) 
Uzbek:
*/

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
for (const k in object1) {
  console.log(k);
}
// expected output: Array ["somestring", 42, false]