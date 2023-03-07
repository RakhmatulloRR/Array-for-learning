Array.prototype.sort1 = function (callback) {
  for (let i = 1; i < this.length; i++) {
    let d = 0;
    for (let j = 0; j < this.length - 1; j++) {
      if (callback) {
        let a = this[j];
        let b = this[j + 1];
        if (callback(a, b) > 0) {
          d += 1;
          let c = this[j];
          this[j] = this[j + 1];
          this[j + 1] = c;
        }
      } else {
        let a = this[j].toString();
        let b = this[j + 1].toString();
        if (a > b) {
          d += 1;
          let c = this[j];
          this[j] = this[j + 1];
          this[j + 1] = c;
        }
      }
    }
    // agar d = 0 bo'lsa jarayon yakunlandi degani
    if (d === 0) {
      return this;
    }
  }
  return this;
};

// !======= Test ========
const nums = [2, 3, 4, 5, 72, 6, 710, 7, 701, 8];
const texts = ['a', 'e', 'd', 'ad', 'c', 'b', 'ac'];

const result = nums.sort1();
console.log(result);
