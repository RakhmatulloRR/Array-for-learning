let arr1 = [1, 2, 3];
let arr2 = [9, 9, 9];

function increase(arr, delta) {
 //! 1
 let res1 = (+arr.join("") + delta).toString().split("").map(item => +item)
 return res1
 //! 2
//  let res2 = String((Number(arr.join("")) + delta)).split("").map(item => Number(item))
//  return res2
}

console.log(increase(arr1, 2))