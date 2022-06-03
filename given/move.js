//input ->       0  1  2  3  4
const letters = ["a", "b", "c", "d", "e"];
const index = 1;
const offset = 1;
//output -> [d, a, b, c, e];

const output = move(letters, index, offset);
console.log(output);

function move(array, index, offset) {
  // todo;
  const res = [...array];
  const position = index + offset;
  const condition = (position < 0 || position > res.length);
  if (condition) {
    return "Invalid offset."
  }
  let element = res.splice(index, 1);
  res.splice(position, 0, ...element);
  return res;
}
