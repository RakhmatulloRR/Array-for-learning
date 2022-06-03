const arr = [1, 2, 3, 4, 5, 6, 7];

let left = 0; // 0 1 2
let right = arr.length - 1; // 6 5 4
// ! while loop
// while (left < right) {
//   let temp = arr[left];
//   arr[left] = arr[right];
//   arr[right] = temp;
//   left++;
//   right--;
// }
// console.log(arr);
// ! for loop
for (let i = 0; i < arr.length / 2; i++) {
  if (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}
console.log(arr);
