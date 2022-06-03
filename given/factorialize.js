function factorialize1(num) {
  // Agar raqam 0 dan kichik bo'lsa, uni rad eting.
  if (num < 0) return -1;
  // Agar raqam 0 bo'lsa, uning faktoriali 1 bo'ladi.
  else if (num == 0) return 1;
  // Aks holda, rekursiv protsedurani qayta chaqiring
  else {
    return num * factorialize(num - 1);
  }
}
// console.log(factorialize1(4));

function factorialize2(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
console.log(factorialize2(5))