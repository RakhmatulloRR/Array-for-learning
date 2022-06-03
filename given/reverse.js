let a = 10;
let b = 30;

function reverse() {
  let c = a
  a = b
  b = c
}
reverse()
console.log(a, b) // 30, 10