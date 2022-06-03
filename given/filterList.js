function filter_list(l) {
  // Return a new array with the strings filtered out
  // !1
  // const res = [];
  // for (let i = 0; i < l.length; i++) {
  //   if (typeof l[i] === "number" ) {
  //     res.push(l[i]);
  //   }
  // }
  // return res;
  // !2
  return l.filter(elm => typeof elm === "number");
}
let l = [1, "a", "b", 0, 15];
console.log(filter_list(l));

console.log(typeof 1)