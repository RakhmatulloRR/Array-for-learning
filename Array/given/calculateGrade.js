// 0-55.9:    D
// 56-70.9:   C
// 71-85.9:   B
// 86-100:  A

let marks = [81, 74, 86, 59, 77];
console.log(calculateGrade(marks));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function calculateGrade(marks) {
  let sum = 0;
  let len = marks.length;
  for (let i = 0; i < len; i++) {
    sum += marks[i];
  }
  avrM = sum / len;
  if (avrM >= 0 && avrM < 56) {
    return "D";
  } else if (avrM >= 56 && avrM < 71) {
    return "C";
  } 
   else if (avrM >= 71 && avrM < 86) {
    return "B";
  } 
   else if (avrM >= 86 && avrM <= 100) {
    return "A";
  } 
  else {
    return "Kiritilgan ma'lumot noto'g'ri!"
  }
}
