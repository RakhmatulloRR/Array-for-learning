// buning findIndex() dan farqi 
// -- i ning o'rniga this[i]
// -- -1 ning o'rniga undefined qaytaradi
const  find1 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
}
Array.prototype.find1 = find1;
//!======= Test =======
const nums = [5, 12, 8, 130, 44, 140];
console.log(nums.find1(elm => elm > 13));