// Input: 
let coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true
const output = checkStraightLine(coordinates);
console.log(output);

function checkStraightLine(coordinates) {
  if (coordinates.length <= 2) {
    return true;
  }
  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[1];
  
  for (let i = 0; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];
    if ((y2 - y1) * (x - x1) != (x2 - x1) * (y - y1)) {
      return false;
    }
  }
  return true;
}
