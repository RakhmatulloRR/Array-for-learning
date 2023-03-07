Array.prototype.reverse1 = function () {
  let left = 0; // 0 1 2
  let right = this.length - 1; // 6 5 4
  // while(left < right) {
  //     let temp = this[left];
  //     this[left] = this[right];
  //     this[right] = temp;
  //     left++;
  //     right--;
  // }
  for (let i = 0; i < this.length; i++) {
    if (left < right) {
      let temp = this[left];
      this[left] = this[right];
      this[right] = temp;
      left++;
      right--;
    } else {
      return this;
    }
  }
};
// ! ======= Test =======

const arr = [1, 'b', 'abc', { name: 'Jonh' }, 10, 7, 6];
const result = arr.reverse1();

console.log(result); // [6, 7, 10, { name: 'Jonh' }, 'abc', 'b', 1]
