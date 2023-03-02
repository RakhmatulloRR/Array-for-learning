/*
~ keyboard: copies, modified
The Object.assign() method copies all enumerable own properties 
from one or more source objects to a target object. 
It returns the modified target object.
1. enumerable - sanab o'tish mumkin, sanaladigan.
UZBEK
Object.assign() usuli bir yoki bir nechta sourse ob'ektlaridan 
target ob'ektga barcha sanab o'tiladigan shaxsiy xususiyatlarni ko'chiradi. 
O'zgartirilgan target ob'ektni qaytaradi. */

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); 
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }