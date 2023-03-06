// buning findIndex() dan farqi
// -- i ning o'rniga this[i]
// -- -1 ning o'rniga undefined qaytaradi
Array.prototype.find1 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};
//!======= Test =======
const nums = [5, 12, 8, 130, 44, 140];
const res = nums.find1((elm) => elm > 6);
console.log(res);
