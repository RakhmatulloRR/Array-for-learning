Array.prototype.flatMap1 = function (callback) {
  const result = [];
  function func(arr, d) {
    for (let i = 0; i < arr.length; i++) {
      // if (JSON.stringify(arr[i]).includes('[') && d) {
      if (Array.isArray(arr[i]) && d) {
        func(arr[i], d - 1);
      } else {
        result.push(arr[i]);
      }
    }
  }
  func(this, d);
  return result;
};
// !========== Test ===========
const arr = [2, [3, [4, [5], 6], 7], 8];
const result = arr.flatMap((v) => {
  return [v];
});
console.log(result);
