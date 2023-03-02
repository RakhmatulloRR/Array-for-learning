const  findIndex1 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
}
Array.prototype.findIndex1 = findIndex1;
//!======= Test =======
const nums = [5, 12, 8, 130, 44, 140];
console.log(nums.findIndex1(elm => elm > 13));
