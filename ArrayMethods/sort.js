function sort1(callback) {
  for (let i = 1; i < this.length; i++) {
    for (let j = 0; j < this.length - 1; j++) {
      if (callback) {
        if (callback(this[j], this[j+1]) > 0) {
          let c = this[j];
          this[j] = this[j + 1];
          this[j + 1] = c;
        }
      } else {
        let a = this[j].toString();
        let b = this[j + 1].toString();
        if (a > b) {
          let c = this[j];
          this[j] = this[j + 1];
          this[j + 1] = c;
        }
      }
    }
  }
  return this;
}
Array.prototype.sort1 = sort1;

// !======= Test ========
const nums = [2, 3, 4, 5, 72, 6, 710, 7, 701, 8];
const texts = ["a", "e", "d", "ad", "c", "b", "ac"];

const result = nums.sort1((a, b) => { return a - b });
console.log(result);
// console.log(texts);
